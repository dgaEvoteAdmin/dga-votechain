export default {
  appName: "DGA E-Voting",
  app: {
    loading: "รอสักครู่",
    offlineMode: "ปิดปรับปรุงระบบชั่วคราว ตั้งแต่",
    navbar: {
      adminShowUsers: "รายชื่อผู้ใช้",
      blockchain: "Blockchain",
      language: "ภาษาปัจจุบัน",
      news: {
        title: "ข่าวสาร",
        loadingNews: "รอสักครู่...",
        noMoreNews: "ไม่พบข่าวสาร",
        loadMoreNews: "โหลดข่าวสารเพิ่ม",
        add: "เพิ่ม"
      },
      notification: {
        title: "แจ้งเตือน",
        loadingNotifications: "รอสักครู่...",
        noMoreNotifications: "ไม่พบแจ้งเตือน",
        loadMoreNotifications: "โหลดแจ้งเตือนเพิ่ม",
      },
      user: {
        title: "ผู้ใช้งาน",
        welcome: "ยินดีต้อนรับสู่ to E-Voting",
        anonymous: "ผู้ไม่ทราบนาม",
        switchRoleMode: "เปลี่ยนโหมดเป็น",
        desyncTime: "เวลาไม่ตรงกับเซิร์ฟเวอร์",
      },
      withdrawUser: {
        title: "ถอนตัวจากระบบ",
        confirm1: "ต้องการถอนตัวจากระบบ E-Voting หรือไม่?",
        confirm2: "กระบวนการนี้ไม่สามารถย้อนกลับได้",
      },
      target: "ไปยัง",
      go: "ไป",
      logout: "ออกจากระบบ"
    },
    home: {
      title: "หน้าแรก",
      header: "บริการ DGA E-Voting บน Blockchain"
    },
    about: {
      title: "เกี่ยวกับบริการ",
    },
    login: {
      title: "เข้าสู่ระบบ",
      loginDigitalId: "เข้าสู่ระบบด้วย Digital ID",
      loginThaId: "เข้าสู่ระบบด้วย ThaID",
      registerDigitalId: "ลงทะเบียนด้วย Digital ID",
    },
    preferences: {
      title: "ตั้งค่าการใช้งาน",
      userInfo: "ข้อมูลผู้ใช้",
      topMenu: {
        title: "ตั้งค่าแถบเมนู",
        order: "ลำดับเมนู",
        remainTopMenu: "เมนูที่เหลืออยู่",
        currentTopMenu: "เมนูปัจจุบัน",
      },
      typeToEdit: "พิมพ์เพื่อแก้ไข",
      isGovOfficer: "ข้าราชการ/บุคลากรของรัฐ",
      action: "แก้ไขข้อมูล",
      confirm: "ยีนยันการตั้งค่า?",
      success: "ตั้งค่าสำเร็จ",
      failed: "ตั้งค่าล้มเหลว",
    },
    topic: {
      create: {
        title: "สร้างโหวต",
        action: "ตั้งโหวต",
        confirm: "ยืนยันการตั้งโหวต",
        success: 'ตั้งโหวตสำเร็จ',
        failed: 'ตั้งโหวตล้มเหลว',
      },
      recreate: {
        title: "สร้างโหวตใหม่",
      },
      edit: {
        title: "แก้ไขโหวต",
        action: "แก้ไขโหวต",
        confirm: "ยืนยันการแก้ไขโหวต",
        success: 'แก้ไขโหวตสำเร็จ',
        failed: 'แก้ไขโหวตล้มเหลว',
      },
      defaultVotes: "จำนวนโหวตตั้งต้น",
      template: {
        yesno: {
          label: "ใช่/ไม่",
          choice1: "ใช่",
          choice2: "ไม่"
        },
        option2: {
          label: "สองตัวเลือก",
          choice1: "ตัวเลือก 1",
          choice2: "ตัวเลือก 2",
        },
        option3: {
          label: "สามตัวเลือก",
          choice1: "ตัวเลือก 1",
          choice2: "ตัวเลือก 2",
          choice3: "ตัวเลือก 3",
        }
      },
      templateTitle: "ต้นแบบการโหวต",
      useTemplate: "ใช้ต้นแบบการโหวต",
      applyTemplate: "ใช้ต้นแบบ",
      withDepartment: "ระบุหน่วยงาน/กรม",
      error: {
        notFound: "ไม่พบกระทู้โหวต",
        notEditable: "ไม่สามารถแก้ไขกระทู้โหวต"
      },
      accessModifier: "การเข้าถึง",
      voteDuration: {
        title: "ระยะเวลา",
        inputMode: "โหมด",
        mode: {
          startDuration: "เริ่มต้น/ระยะเวลา",
          startEnd: "เริ่มต้น/สิ้นสุด",
        },
        start: "เริ่มต้นโหวต",
        duration: "ระยะเวลาโหวต",
        end: "สิ้นสุดโหวต",
        startDate: "วันเริ่มต้น",
        endDate: "วันสิ้นสุด",
        startTime: "เวลาเริ่มต้น",
        endTime: "เวลาสิ้นสุด",
      },
      topicQuestion: "คำถาม",
      addChoice: {
        title: "เพิ่มตัวเลือก",
        add: "เพิ่มตัวเลือก",
        remove: "ลบตัวเลือก",
        error: {
          empty: "ต้องระบุชื่อตัวเลือก",
          duplicated: "ชื่อตัวเลือกซ้ำกัน"
        }
      },
      coadminList: {
        title: "รายชื่อแอดมินร่วม",
      },
      csvSearch: "เพิ่มจาก CSV",
      csvTemplate: "แบบฟอร์ม CSV",
      csvInserted: "เพิ่มผู้ใช้",
      distinctVotes: "โหวตแต่ละตัวเลือกสูงสุดหนึ่งสิทธิ์",
      anonymousVotes: "อนุญาตให้คนทั่วไปโหวตได้",
      notifyUsers: "ส่งแจ้งเตือนให้ผู้ใช้",
      showCreator: "แสดงชื่อผู้ตั้งโหวตสู่สาธารณะ",
      recordBlockchain: "บันทึกลง Blockchain",
      voterScorePublic: "แสดงการโหวตของทุกคนสู่สาธารณะ",
      allow: "อนุญาต",
      deny: "ปฏิเสธ",
    },
    voting: {
      title: "ร่วมโหวต",
      filters: {
        all: "ทั้งหมด",
        date: "จากวันที่",
        ticketId: "จาก Ticket Vote",
        topicName: "จากชื่อคำถาม",
        accessModifier: "แสดง",
        ticketIdPlaceholder: "#Ticket Vote",
        topicNamePlaceholder: "ชื่อคำถาม",
        search: "ค้นหา",
      },
      period: "ระยะเวลา",
      expired: "สิ้นสุด",
      createdBy: "ตั้งโดย",
      voteOn: "เปิดโหวต",
      loadMoreTopic: "โหลดคำถามเพิ่มเติม",
      noMoreTopic: "ไม่พบคำถาม",
      qrcode: "QR Code",
      createTopic: "ตั้งโหวต",
      avaliableTopic: "โหวตที่เปิดอยู่",
      editTopic: "แก้ไข",
      recreateTopic: "สร้างใหม่",
      status: {
        waiting: "รอเปิดโหวต",
        result: "ผลโหวต",
        access: "ร่วมโหวต",
        control: "ดูแลโหวต",
        voting: "กำลังโหวต",
        voted: "โหวตสำเร็จ",
        finished: "รอนับผล",
      },
      error: {
        title: "แจ้งทราบ!!",
        waiting: "ยังไม่ถึงเวลาโหวต",
        notVoteable: "กำลังทำการโหวต รอจนกว่าสิ้นสุดการโหวต",
        waitResult: "กำลังนับคะแนน รอนับคะแนนสำเร็จ",
      },
      now: "ขณะนี้",
      localtime: "เวลาท้องถิ่น",
      remainVotes: "เหลืออีก",
      totalVotes: "ทั้งหมด",
      vote: "โหวต",
      remainTimeVoting: "เหลือระยะเวลาในการโหวต",
      yourVote: "การโหวตของคุณ",
      voterVoted: "โหวตไปแล้ว",
      startVoteOn: "เริ่มโหวตเมื่อ",
      timeRemain: "เหลือระยะเวลาอีก",
      timePaused: "หยุดเวลาไปแล้ว",
      running: "การโหวตกำลังดำเนินการ",
      paused: "การโหวตหยุดชั่วคราว",
      adminWarning: "ให้เปลี่ยนสถานะเป็น ผู้โหวต ก่อนการลงคะแนนเสียง",
      cannotVote: "ไม่สามารถโหวตได้",
      pause: "หยุด",
      resume: "โหวตต่อ",
      clear: "ล้าง",
      noVote: "งดออกเสียง",
      submit: "ส่ง",
      confirm: "ยืนยันการเลือกโหวตนี้?",
      pauseCause: "เหตุผล",
      pauseCauseTitle: "ระบุเหตุผลหยุดโหวตชั่วคราว",
    },
    result: {
      title: "ผลการโหวต",
      winners: "ผู้ชนะ",
      stats: "สถิติ",
      totalVoters: "จำนวนผู้มีสิทธิ์ลงคะแนน",
      votedVoters: "ใช้สิทธิ์",
      noVotedVoters: "ไม่ใช้สิทธิ์",
      totalVotes: "จำนวนเสียงที่มี",
      actualVotes: "โหวตจริง",
      remainVotes: "ไม่ได้ลงโหวต",
      scores: "ผลคะแนน",
      total: "รวมทั้งหมด",
      noVoted: "ไม่ประสงค์ลงคะแนน",
      yourChoice: "คุณเลือก",
      winner: "ผู้ชนะ",
      export: "ส่งออกผลโหวต",
    },
    voterList: {
      title: "รายชื่อโหวต",
      multipleVotes: "โหวตได้หลายตัวเลือก",
      totalVotes: "จำนวนเสียง",
      add: "เพิ่มชื่อ",
      remove: "ลบชื่อ",
      searchUser: "ค้นหาผุ้ใช้",
      addUser: "เพิ่มผู้เข้าโหวต",
      error: {
        duplicated: "ผู้ใช้ซ้ำ",
        notFound: "ไม่พบผู้ใช้",
      }
    },
    contactUs: {
      title: "ติดต่อเรา",
      info: {
        company: "สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)",
        address: "ชั้น 17 อาคารบางกอกไทยทาวเวอร์ 108 ถนนรางน้ำ แขวงถนนพญาไท เขตราชเทวี กรุงเทพฯ 10400",
        tels: "โทรสาร:",
        email: "อีเมล:",
        contactCenter: "DGA Contact Center:",
      },
    },
    help: {
      title: "วิธีใช้งาน",
      pdf: "PDF",
      googleDocsVersion: "เวอร์ชั่น Google Docs",
    },
    userid: "User ID",
    userName: "ชื่อ",
    firstName: "ชื่อ",
    lastName: "นามสกุล",
    email: "อีเมล",
    citizenid: "รหัสบัตรประชาชน",
    ministry: "กระทรวง",
    department: "สังกัด/กรม",
    division: "กอง/หน่วยงาน",
    ticketid: "Ticket ID",
    description: {
      title: "รายละเอียด",
      add: "เพิ่มรายละเอียด",
      hide: "ซ่อนรายละเอียด",
      show: "แสดงรายละเอียด",
    },
    topicType: {
      public: "โหวตสาธารณะ",
      private: "โหวตทางลับ",
      internal: "โหวตในองค์กร"
    },
    privateVote: "โหวตทางลับ",
    votersList: "รายชื่อผู้มีสิทธิ์โหวต",
    permissions: {
      "request-permissions": "ขอสิทธิ์เพิ่มเติม",
      "voter-mode": "เข้าโหมดผู้โหวต",
      "admin-mode": "เข้าโหมดผู้ดูแล",
      "dev-mode": "เข้าโหมดผู้พัฒนา",
      "vote-topic": "โหวตคำถาม",
      "create-topic": "สร้างการโหวต",
      "change-topic": "แก้ไขข้อมูลการโหวต",
      "control-topic": "ควบคุมการโหวต",
      "create-news": "สร้างข่าว",
      "change-news": "แก้ไขข่าว",
      "change-permissions": "เปลี่ยนสิทธิ์ให้ผู้อื่น",
    },
    requestPermissions: {
      add: {
        title: "ส่งแบบขอสิทธิ์",
        noteToApprover: "หมายเหตุ",
        requestTo: {
          title: "ขอสิทธิ์",
          moderator: "ผู้ดูแลระบบ",
          developer: "นักพัฒนาระบบ"
        },
        allowConsent: "อนุมัติส่งข้อมูลส่วนตัวให้ผู้อนุมัติ",
        action: "ส่งคำขอ",
        success: "ส่งคำขอสำเร็จ",
        failed: "ส่งคำขอไม่สำเร็จ",
        pendingBlocked: "กรุณารอคำขอพิจารณาสำเร็จก่อนกรอกอีกครั้ง",
      },
      change: {
        title: "แก้ไขสิทธิ์",
        action: "เปลี่ยน",
        confirm: "ยืนยันการเปลี่ยนสิทธิ์?",
        success: "เปลี่ยนสิทธิ์สำเร็จ",
        failed: "เปลี่ยนสิทธิ์ล้มเหลว",
      },
      permissions: "สิทธิ์",
      note: "หมายเหตุ",
      noteNone: "ไม่มี",
      approveRequestPermissions: "อนุมัติการขอสิทธิ์",
      requestsNotFound: "ไม่พบรายการขอสิทธิ์",
      manageApproveList: "จัดการรายการอนุมัติ",
      approve: "อนุมัติ",
      reject: "ปฏิเสธ",
      personalData: "ข้อมูลส่วนบุคคล",
    },
    admin: {
      user: {
        title: "รายชื่อผู้ใช้งาน",
        changePermissions: "แก้ไขสิทธิ์",
        showAllUsers: "แสดงผู้ใช้ทั้งหมด",
      },
      blockchain: {
        title: "จัดการ Blockchain",
        blockInfo: {
          title: "ข้อมูลบล็อก",
          total: "ทั้งหมด",
          mined: "ยืนยันแล้ว",
          pending: "รอดำเนินการ",
          invalid: "ไม่ถูกต้อง",
        },
        serverStatus: {
          title: "ข้อมูล Server",
          total: "ทั้งหมด",
          online: "ออนไลน์",
          offline: "ออฟไลน์",
        },
        searchTx: "ค้นหา",
        txhash: "TX Hash",
        voteid: "Vote ID",
        txInfo: "ข้อมูล TX",
        liveTxUpdate: "รายการ TX ล่าสุด",
        type: {
          title: "ประเภท",
          vote: "โหวต",
          result: "ผลโหวต"
        },
        createdAt: "สร้างเมื่อ",
        status: "สถานะ",
        transactionData: "ข้อมูลใน TX",
        transactionRawData: "ข้อมูลดิบ TX",
      },
      config: {
        title: "ตั้งค่าระบบ",
        content: "เนื้อหา",
        homeContent: "เนื้อหาหน้าแรก",
        aboutContent: "เนื้อหาหน้าเกี่ยวกับบริการ",
        contactUsContent: "เนื้อหาหน้าติดต่อเรา",
        confirm: "ยีนยันการตั้งค่า?",
        success: "ตั้งค่าสำเร็จ",
        failed: "ตั้งค่าล้มเหลว",
      }
    },
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    cookiePolicy: "นโยบายคุกกี้",
    termCondition: "เงื่อนไขและข้อตกลง",
    sendFeedback: "ส่งข้อเสนอแนะ",
    countable: {
      vote: "โหวต",
      voter: "คน"
    },
    timePeriod: {
      nearZeroMinute: "ไม่ถึงนาที",
      minute: "นาที",
      hour: "ชั่วโมง",
      day: "วัน",
    },
    modal: {
      back: "กลับ",
      close: "ปิด",
      cancel: "ยกเลิก",
      confirm: "ยืนยัน"
    },
    anonymous: "ผู้ไม่ทราบนาม",
    role: {
      guest: "นิรนาม",
      voter: "ผู้โหวต",
      admin: "ผู้ดูแล",
      developer: "ผู้พัฒนา",
    },
    required: "จำเป็น",
    optional: "ไม่จำเป็น",
    selectAll: "เลือกทั้งหมด",
    deselectAll: "เอาออกทั้งหมด",
    select: "เลือก",
    deselect: "เอาออก",
    moveToTop: "ย้ายไปยังบนสุด",
    moveUp: "ย้ายขึ้น",
    moveDown: "ย้ายลง",
    moveToBottom: "ย้ายไปยังล่างสุด",
    add: "เพิ่ม",
    edit: "แก้ไข",
    revert: "ย้อนกลับ",
    change: "เปลี่ยน",
    remove: "ลบ",
    detail: "รายละเอียด",
    error: {
      title: "ผิดพลาด",
      backToHome: "กลับสู่หน้าหลัก"
    },
  },
  notification: {
    topic: {
      title: "การโหวต",
      voting: "เริ่มต้นแล้ว",
      pause: "ถูกหยุดชั่วคราว",
      resume: "กลับมาโหวตใหม่แล้ว",
      finished: "สิ้นสุดแล้ว",
    },
    "request-permission": {
      title: "การขอสิทธิ์",
      pending: "กำลังดำเนินการ",
      approved: "อนุมัติแล้ว",
      rejected: "ปฏิเสธ"
    }
  },
  news: {
    title: "ข่าว",
    id: "รหัสข่าว",
    create: {
      title: "สร้างข่าว",
      confirm: "ยืนยันการสร้างข่าวหรือไม่?",
      action: "สร้างข่าว",
      success: "สร้างข่าวสำเร็จ",
      failed: "สร้างข่าวล้มเหลว",
    },
    edit: {
      title: "แก้ไขข่าว",
      confirm: "ยืนยันการแก้ไขข่าวหรือไม่?",
      action: "แก้ไขข่าว",
      success: "แก้ไขข่าวสำเร็จ",
      failed: "แก้ไขข่าวล้มเหลว",
    },
    required: "จำเป็น",
    newsTitle: "หัวข้อข่าว",
    author: "ชื่อผู้เขียน",
    content: "เนื้อหา",
    references: "อ้างอิง",
    publishAt: "เผยแพร่เมื่อ",
    publishTime: {
      title: "เผยแพร่",
      date: "วันเผยแพร่",
      time: "เวลาเผยแพร่",
    },
    newsExpired: "มีวันสิ้นสุด",
    expiredTime: {
      date: "วันสิ้นสุด",
      time: "เวลาสิ้นสุด",
    },
    noReference: "ไม่มีแหล่งอ้างอิง"
  },
  cookieConsent: {
    useCookie: "เว็บไซต์นี้ใช้คุกกี้",
    useCookieInfo1: "เราใช้คุกกี้เพื่อประสบการณ์ที่ดีที่สุดในเว็บไซต์ของเรา",
    useCookieInfo2: "โปรดศึกษาเพิ่มเติมที่",
    acceptAll: "รับทั้งหมด",
    acceptRequiredOnly: "รับเฉพาะที่จำเป็น",
  }
}