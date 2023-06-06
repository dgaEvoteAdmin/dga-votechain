export default {
  appName: "DGA E-Voting",
  app: {
    userInfoEdit: {
      title: "แก้ไขข้อมูลผู้ใช้",
      typeToEdit: "พิมพ์เพื่อแก้ไข",
      isGovOfficer: "ข้าราชการ/บุคลากรของรัฐ",
      action: "แก้ไขข้อมูล",
      confirm: "ยีนยันการแก้ไขข้อมูลผู้ใช้?",
      success: "แก้ไขข้อมูลผู้ใช้สำเร็จ",
      failed: "แก้ไขข้อมูลผู้ใช้ล้มเหลว",
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
        email: "Email",
        name: "ชื่อ",
        add: "เพิ่มชื่อ",
        remove: "ลบชื่อ",
        searchUser: "ค้นหาผู้ใช้",
        error: {
          duplicated: "ผู้ใช้ซ้ำ"
        }
      },
      notifyUsers: "ส่งแจ้งเตือนให้ผู้ใช้",
      skipBlockchain: "ไม่บันทึกลง Blockchain",
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
        ticketIdPlaceholder: "#Ticket Vote",
        topicNamePlaceholder: "ชื่อคำถาม",
        search: "ค้นหา",
      },
      period: "ระยะเวลา",
      expired: "สิ้นสุด",
      createdBy: "ตั้งโดย",
      voteOn: "เปิดโหวต",
      loadingTopic: "รอสักครู่...",
      loadMoreTopic: "โหลดคำถามเพิ่มเติม",
      noMoreTopic: "ไม่พบคำถาม",
      createTopic: "ตั้งโหวต",
      avaliableTopic: "โหวตที่เปิดอยู่",
      editTopic: "แก้ไข",
      recreateTopic: "สร้างใหม่",
      status: {
        waiting: "รอเปิดโหวต",
        result: "ผลโหวต",
        access: "ร่วมโหวต",
        voting: "กำลังโหวต",
        voted: "โหวตสำเร็จ",
        finished: "รอนับผล",
      },
      error: {
        title: "ผิดพลาด",
        waiting: "ยังไม่ถึงเวลาโหวต",
        notVoteable: "กำลังเปิดโหวต รอจนกว่าสิ้นสุดการโหวต",
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
      pasueCauseTitle: "ระบุเหตุผลหยุดโหวตชั่วคราว",
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
      multipleVotes: "โหวตได้หลายเสียง",
      totalVotes: "จำนวนเสียง",
      add: "เพิ่มชื่อ",
      remove: "ลบชื่อ",
      searchUser: "ค้นหาผู้ใช้",
      error: {
        duplicated: "ผู้ใช้ซ้ำ"
      }
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
    publicVote: "โหวตสาธารณะ",
    privateVote: "โหวตทางลับ",
    votersList: "รายชื่อผู้มีสิทธิ์โหวต",
    countable: {
      vote: "โหวต",
      voter: "คน"
    },
    modal: {
      back: "กลับ",
      cancel: "ยกเลิก",
      confirm: "ยืนยัน"
    },
    edit: "แก้ไข",
  },
  navbar: {
    home: "หน้าแรก",
    voting: "ร่วมโหวต",
    about: "เกี่ยวกับบริการ",
    help: "วิธีใช้งาน",
    contactUs: "ติดต่อเรา",
    adminShowUsers: "รายชื่อผู้ใช้",
    blockchain: "Blockchain",
    login: "เข้าสู่ระบบ",
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
      desyncTime: "เวลาไม่ตรงกับเซิร์ฟเวอร์"
    },
    logout: "ออกจากระบบ"
  },
  privacyPolicy: {
    title: "นโยบายความเป็นส่วนตัว"
  },
  cookiePolicy: {
    title: "นโยบายคุกกี้"
  },
  notification: {
    topicStart: "เริ่มเปิดโหวต",
    requestPermission: {
      title: "การขอสิทธิ์",
      inProgress: "กำลังดำเนินการ",
      approved: "อนุมัติแล้ว",
      rejected: "ปฏิเสธ"
    }
  },
  home: {
    title: "หน้าแรก",
    header: "บริการ DGA E-Voting บน Blockchain"
  },
  about: {
    title: "เกี่ยวกับบริการ",
    info: "บริการนี้เกิดขึ้นจากแนวความคิดเรื่องการลงคะแนนเสียงกลุ่มย่อย ๆ ของการประชุมประชาชนภายในหมู่บ้านของอบต. เช่น อยากให้ทางเทศบาลจัดเก็บขยะมูลฝอยในวันใดของสัปดาห์ หรืออยากให้เครื่องออกกำลังกายของหมู่บ้านวางไว้ตรงจุดใด เป็นต้น ซึ่งเป็นเรื่องการถามความเห็นทั่วไป การถามความเห็นและลงคะแนนเสียงของประชาชน เกิดความไม่สะดวกของประชาชนที่จะต้องเดินทางมาลงคะแนนเสียง เลยเห็นว่าหากการลงคะแนนเสียงทางอิเล็กทรอนิกส์สามารถทำได้จริงจะแก้ไขปัญหาได้ การลงคะแนนเสียง E-Vote อาจติดเรื่องของความไม่โปร่งใสขึ้นได้  ดังนั้นในโครงการจึงได้นำเอาเทคโนโลยี Blockchain และการยืนยันตัวตนมาใช้ควบคู่กันเพื่อช่วยในการลงคะแนนเสียงเกิดความโปร่งใสมากขึ้น"
  },
  help: {
    title: "วิธีใช้งาน",
    pdf: "PDF",
    googleDocsVersion: "เวอร์ชั่น Google Docs",
  },
  contactUs: {
    title: "ติดต่อเรา",
    info: {
      address1: "สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)",
      address2: "ชั้น 17 อาคารบางกอกไทยทาวเวอร์ 108 ถนนรางน้ำ แขวงถนนพญาไท เขตราชเทวี กรุงเทพฯ 10400",
      tels: "โทรสาร:",
      email: "อีเมล:",
      contactCenter: "DGA Contact Center:",
    },
  },
  login: {
    title: "เข้าสู่ระบบ",
    loginDigitalId: "เข้าสู่ระบบด้วย Digital ID",
    loginWithGoogle: "เข้าสู่ระบบด้วย Google",
    registerDigitalId: "ลงทะเบียนด้วย Digital ID",
  },
  register: {
    firebase: {
      title: "ลงทะเบียนด้วยบัญชี Google",
      token: "Token"
    },
    action: "ลงทะเบียน",
    confirm: "ยืนยันข้อมูล?",
    success: "ลงทะเบียนสำเร็จ",
    failed: "ลงทะเบียนล้มเหลว",
  },
  role: {
    guest: "แขกรับเชิญ",
    voter: "ผู้โหวต",
    admin: "ผู้ดูแล",
    developer: "ผู้พัฒนา",
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
    anonymous: "ผู้ไม่ทราบนาม",
    noReference: "ไม่มีแหล่งอ้างอิง"
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
    approve: "อนุมัติ",
    manageApproveList: "จัดการรายการอนุมัติ",
    reject: "ปฏิเสธ",
    userid: "ID ผู้ใช้",
    personalData: "ข้อมูลส่วนบุคคล",
    citizenid: "รหัสบัตรประชาชน",
    name: "ชื่อ",
    email: "อีเมล์"
  },
  permissions: {
    "request-permissions": "ขอสิทธิ์เพิ่มเติม",
    "voter-mode": "เข้าโหมดผู้โหวต",
    "request-topic": "ขอเปิดโหวต",
    "admin-mode": "เข้าโหมดผู้ดูแล",
    "dev-mode": "เข้าโหมดผู้พัฒนา",
    "vote-topic": "โหวตคำถาม",
    "create-topic": "สร้างการโหวต",
    "change-topic": "แก้ไขข้อมูลการโหวต",
    "change-permissions:basic": "เปลี่ยนสิทธิ์ขั้นพื้นฐาน",
    "change-permissions:advance": "เปลี่ยนสิทธิ์ขั้นสูง",
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
      detail: "รายละเอียด",
      transactionData: "ข้อมูลใน TX",
      transactionRawData: "ข้อมูลดิบ TX",
    },
  },
  timePeriod: {
    nearZeroMinute: "ไม่ถึงนาที",
    minute: "นาที",
    hour: "ชั่วโมง",
    day: "วัน",
  },
  error: {
    title: "ผิดพลาด",
    backToHome: "กลับสู่หน้าหลัก"
  },
  loading: "รอสักครู่",
  cookieConsent: {
    useCookie: "เว็บไซต์นี้ใช้คุกกี้",
    useCookieInfo1: "เราใช้คุกกี้เพื่อประสบการณ์ที่ดีที่สุดในเว็บไซต์ของเรา",
    useCookieInfo2: "โปรดศึกษาเพิ่มเติมที่",
    acceptAll: "รับทั้งหมด",
    acceptRequiredOnly: "รับเฉพาะที่จำเป็น",
  }
}