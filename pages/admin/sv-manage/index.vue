<template>
  <div v-if="stats">
    <DgaHead>{{ $t("app.admin.blockchain.manageServer.title") }}</DgaHead>
    <div class="mx-auto grid max-w-6xl grid-cols-12 gap-2 py-2">
      <div
        class="col-span-12 flex flex-col self-start rounded-md border-2 border-dga-blue lg:col-span-4"
      >
        <h4 class="p-2 text-lg font-bold">
          {{ $t("app.admin.blockchain.manageServer.addServer") }}
        </h4>
        <div class="flex-1 overflow-y-auto border-t-2 border-dga-blue p-2">
          <div class="grid grid-cols-12 gap-x-4 gap-y-2">
            <div class="col-span-12">
              {{ $t("app.admin.blockchain.manageServer.host") }}
            </div>
            <div class="col-span-12">
              <DgaInput
                v-model="newServer.host"
                type="text"
                class="w-full"
                :placeholder="$t('app.admin.blockchain.manageServer.host')"
              ></DgaInput>
            </div>
            <div class="col-span-12">
              {{ $t("app.admin.blockchain.manageServer.name") }}
            </div>
            <div class="col-span-12">
              <DgaInput
                v-model="newServer.name"
                type="text"
                class="w-full"
                :placeholder="$t('app.admin.blockchain.manageServer.name')"
              ></DgaInput>
            </div>
            <DgaButtonGroup class="col-span-12 mt-4">
              <DgaButton
                class="!flex flex-row items-center justify-center gap-x-2 truncate"
                color="dga-orange"
                :title="$t('app.admin.blockchain.manageServer.add.action')"
                :disabled="!isNewServerValid"
                @click="showConfirmModal = 'createServer'"
              >
                <PlusIcon />
                <span class="truncate">
                  {{ $t("app.admin.blockchain.manageServer.add.action") }}
                </span>
              </DgaButton>
            </DgaButtonGroup>
          </div>
        </div>
      </div>
      <div
        class="col-span-12 flex max-h-[600px] flex-col rounded-md border-2 border-dga-blue lg:col-span-8"
      >
        <h4 class="p-2 text-lg font-bold">
          {{ $t("app.admin.blockchain.manageServer.serverList") }}
        </h4>
        <div
          class="flex flex-1 flex-col gap-2 overflow-y-auto border-t-2 border-dga-blue p-2"
        >
          <div
            v-for="server of blockchainServers"
            class="flex flex-row items-center gap-2"
          >
            <div class="flex flex-1 flex-col gap-2">
              <div class="flex flex-row items-center gap-x-2">
                <div
                  class="h-4 w-4 rounded-full"
                  :class="[
                    isServerOnline(server) ? ' bg-green-700' : ' bg-red-700',
                  ]"
                  :title="
                    isServerOnline(server)
                      ? $t('app.admin.blockchain.serverStatus.online')
                      : $t('app.admin.blockchain.serverStatus.offline')
                  "
                ></div>
                <template v-if="server.name">
                  <div>{{ server.name }}</div>
                  <div class="italic">{{ server.host }}</div>
                </template>
                <div v-else>{{ server.host }}</div>
              </div>
              <div class="flex flex-row items-center gap-x-2 text-sm">
                <div>
                  {{ $t("app.admin.blockchain.manageServer.lastActiveAt") }}
                </div>
                <div>
                  {{
                    server.lastActiveAt
                      ? formatDateTime(server.lastActiveAt)
                      : "-"
                  }}
                </div>
              </div>
            </div>
            <div>
              <CloseIcon
                v-if="!isStarterServer(server)"
                class="cursor-pointer"
                :title="$t('app.admin.blockchain.manageServer.remove.action')"
                @click="popupRemoveServer(server)"
              ></CloseIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DgaModal
      :show="showConfirmModal === 'createServer'"
      cancel-backdrop
      @confirm="addBlockchainServer"
      @close="showConfirmModal = false"
      @cancel="showConfirmModal = false"
    >
      {{ $t("app.admin.blockchain.manageServer.add.confirm") }}
    </DgaModal>
    <DgaModal
      :show="showConfirmModal === 'removeServer'"
      cancel-backdrop
      @confirm="removeBlockchainServer"
      @close="showConfirmModal = false"
      @cancel="showConfirmModal = false"
    >
      {{ $t("app.admin.blockchain.manageServer.remove.confirm") }}
    </DgaModal>
    <DgaLoadingModal :show="waitEdit"></DgaLoadingModal>
  </div>
</template>

<script setup lang="ts">
import PlusIcon from "vue-material-design-icons/Plus.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import { isBlockchainServerDataValid } from "~/src/services/validations/blockchain-server";
import dayjs from "dayjs";
import { formatDateTime } from "~/src/services/formatter/datetime";

const i18n = useI18n();

definePageMeta({
  middleware: ["auth-dev"],
});
useHead({
  title: `${i18n.t("appName", "DGA E-Voting")} - ${i18n.t(
    "app.admin.blockchain.manageServer.title"
  )}`,
});

const todayTime = ref(Date.now());
const blockchainServers: Ref<BlockchainServerDataResponse[]> = ref([]);
const newServer = ref({
  host: "",
  name: "",
});
const showConfirmModal: Ref<string | false> = ref(false);
const waitEdit = ref(false);
const removeServerId = ref("");
const isNewServerValid = computed(
  () =>
    isBlockchainServerDataValid(newServer.value) &&
    blockchainServers.value.findIndex(
      (ele) => ele.host === newServer.value.host
    ) === -1
);

const { data: stats } = await useFetch("/api/blockchain/info");
if (stats.value) {
  blockchainServers.value = stats.value.servers;
} else {
  showError("Can't get Server List data");
}

function isServerOnline(server: BlockchainServerDataResponse) {
  const onlineThershold =
    useRuntimeConfig().public.BLOCKCHAIN_SERVERHB_TIME_THERSOLD;
  if (server.lastActiveAt) {
    const diff = dayjs(todayTime.value).diff(server.lastActiveAt);
    if (diff <= onlineThershold) {
      return true;
    }
    return false;
  }
  return false;
}

async function addBlockchainServer() {
  if (!isNewServerValid.value || waitEdit.value) {
    return;
  }

  showConfirmModal.value = false;
  waitEdit.value = true;

  const { data, error } = await useFetch("/api/blockchain/register", {
    method: "POST",
    body: newServer.value,
  });

  if (error.value) {
    useShowToast({
      title: i18n.t("app.admin.blockchain.manageServer.title"),
      content: i18n.t("app.admin.blockchain.manageServer.add.failed"),
      autoCloseDelay: 5000,
    });
  } else {
    useShowToast({
      title: i18n.t("app.admin.blockchain.manageServer.title"),
      content: i18n.t("app.admin.blockchain.manageServer.add.success"),
      autoCloseDelay: 5000,
    });

    if (data.value) {
      blockchainServers.value.push(data.value.server);
    }

    newServer.value = {
      name: "",
      host: "",
    };
  }

  waitEdit.value = false;
  showConfirmModal.value = false;
}

function updateTime() {
  todayTime.value = useComputedServerTime().getTime();
}

function isStarterServer(server: BlockchainServerDataResponse) {
  return server.isStarter;
}

function popupRemoveServer(server: BlockchainServerDataResponse) {
  showConfirmModal.value = "removeServer";
  removeServerId.value = server._id;
}

async function removeBlockchainServer() {
  if (!removeServerId.value || waitEdit.value) {
    return;
  }

  showConfirmModal.value = false;
  waitEdit.value = true;

  const { error } = await useFetch("/api/blockchain/remove", {
    method: "POST",
    body: {
      _id: removeServerId.value,
    },
  });

  if (error.value) {
    useShowToast({
      title: i18n.t("app.admin.blockchain.manageServer.title"),
      content: i18n.t("app.admin.blockchain.manageServer.remove.failed"),
      autoCloseDelay: 5000,
    });
  } else {
    useShowToast({
      title: i18n.t("app.admin.blockchain.manageServer.title"),
      content: i18n.t("app.admin.blockchain.manageServer.remove.success"),
      autoCloseDelay: 5000,
    });

    const i = blockchainServers.value.findIndex(
      (ele) => ele._id === removeServerId.value
    );
    if (i !== -1) {
      blockchainServers.value.splice(i, 1);
    }
  }

  waitEdit.value = false;
  showConfirmModal.value = false;
}

const socket = useSocketIO();

socket.on("blockchainHb", (data: BlockchainServerDataResponse) => {
  // update
  if (blockchainServers.value) {
    const targetIndex = blockchainServers.value.findIndex(
      (ele) => ele._id === data._id
    );
    if (targetIndex !== -1) {
      blockchainServers.value[targetIndex] = data;
    }
  }
});

let timeId: NodeJS.Timer | undefined;
onMounted(() => {
  timeId = setInterval(updateTime, 500);
  updateTime();
});

onUnmounted(() => {
  clearInterval(timeId);
});
</script>
