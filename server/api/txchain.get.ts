import { getTxArr } from "../utils";

export default defineEventHandler(async (event) => {
  const { pagesize, startid } : TxChainQueryParams = getQuery(event);
  
  const txDocs = await getTxArr(pagesize || 1000, startid || "");

  return txDocs;
})