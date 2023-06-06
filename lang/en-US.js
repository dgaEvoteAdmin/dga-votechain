export default {
  appName: "DGA E-Voting",
  app: {
    userInfoEdit: {
      title: "Edit User Info",
      typeToEdit: "Type to edit",
      isGovOfficer: "Government Officer",
      action: "Edit",
      confirm: "Confirm to Edit User Info?",
      success: "Edit User Info Successful",
      failed: "Edit User Info Failed",
    },
    topic: {
      create: {
        title: "Create Topic",
        action: "Add topic",
        confirm: "Confirm data to add?",
        success: 'Add topic successful',
        failed: 'Add topic failed',
      },
      recreate: {
        title: "Recreate Topic",
      },
      edit: {
        title: "Edit Topic",
        action: "Edit topic",
        confirm: "Confirm data to edit?",
        success: 'Edit topic successful',
        failed: 'Edit topic failed',
      },
      defaultVotes: "Default Vote for Voters",
      template: {
        yesno: {
          label: "Yes/No",
          choice1: "Yes",
          choice2: "No",
        },
        option2: {
          label: "2 Options",
          choice1: "Option 1",
          choice2: "Option 2",
        },
        option3: {
          label: "3 Options",
          choice1: "Option 1",
          choice2: "Option 2",
          choice3: "Option 3",
        }
      },
      templateTitle: "Topic Template",
      useTemplate: "Use Topic Template",
      applyTemplate: "Apply Template",
      error: {
        notFound: "Topic not found",
        notEditable: "Topic not editable"
      },
      accessModifier: "Access Type",
      voteDuration: {
        title: "Vote Duration",
        inputMode: "Input Mode",
        mode: {
          startDuration: "Start/Duration",
          startEnd: "Start/End",
        },
        start: "Start Vote",
        duration: "Duration",
        end: "End Vote",
        startDate: "Start Date",
        endDate: "End Date",
        startTime: "Start Time",
        endTime: "Start Time",
      },
      topicQuestion: "Topic Question",
      addChoice: {
        title: "Add Choice",
        add: "Add Choice",
        remove: "Remove Choice",
        error: {
          empty: "Choice must not empty",
          duplicated: "Choice Duplicated"
        }
      },
      coadminList: {
        title: "Co-Admin Lists",
        name: "Name",
        add: "Add User",
        remove: "Remove User",
        searchUser: "Search User",
        error: {
          duplicated: "Duplicated User"
        }
      },
      notifyUsers: "Send notice to users",
      skipBlockchain: "Not record to Blockchain",
      scorePublic: "Display voter choice(s) for public",
      allow: "Allow",
      deny: "Deny",
    },
    voting: {
      title: "Voting",
      filters: {
        all: "All",
        date: "From Date",
        ticketId: "From Ticket Vote",
        topicName: "From Topic Question",
        ticketIdPlaceholder: "#Ticket Vote",
        topicNamePlaceholder: "Topic Question",
        search: "Go",
      },
      period: "Peroid",
      expired: "Close",
      createdBy: "Created by",
      voteOn: "Vote on",
      loadingTopic: "Loading...",
      loadMoreTopic: "Load more topics",
      noMoreTopic: "No more topic",
      createTopic: "Create",
      avaliableTopic: "All Avaliable",
      editTopic: "Edit",
      recreateTopic: "Recreate",
      status: {
        waiting: "Waiting",
        result: "Result",
        access: "Access",
        voting: "Voting",
        voted: "Voted",
        finished: "Finished",
      },
      error: {
        title: "Error",
        waiting: "Topic is not ready to vote",
        notVoteable: "In progress. Wait until voting finished",
        waitResult: "Counting scores. Wait until finished",
      },
      now: "Now",
      localtime: "Local Time",
      remainVotes: "Remain",
      totalVotes: "Total",
      vote: "Vote | Votes",
      remainTimeVoting: "Time Remain for Voting",
      yourVote: "Your vote",
      voterVoted: "Voters",
      startVoteOn: "Start vote on",
      timeRemain: "Time Remaining",
      timePaused: "Time Paused",
      running: "E-voting is Running",
      paused: "E-voting is Paused",
      adminWarning: "Please change mode to Voter for voting topic.",
      cannotVote: "Can't vote",
      pause: "Paused",
      resume: "Resume",
      clear: "Clear",
      noVote: "No Vote",
      submit: "Submit",
      confirm: "Confirm voting choices?",
      pauseCause: "Reason",
      pasueCauseTitle: "Enter Reason of Pause",
    },
    result: {
      title: "Voting Result",
      winners: "Winners",
      stats: "Stats",
      totalVoters: "Total Voters",
      votedVoters: "Voted",
      noVotedVoters: "Not Voted",
      totalVotes: "Total Votes",
      actualVotes: "Voted",
      remainVotes: "Not Voted",
      scores: "Scores",
      total: "Total",
      noVoted: "No Voted",
      yourChoice: "Your Choice",
      winner: "Winner",
      export: "Export Result",
    },
    voterList: {
      title: "Voter Lists",
      multipleVotes: "Multiple Votes",
      totalVotes: "Total Votes",
      remove: "Remove User",
      searchUser: "Search User",
      error: {
        duplicated: "Duplicated User"
      }
    },
    userid: "User ID",
    userName: "Name",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    citizenid: "Citizen ID",
    ministry: "Ministry",
    department: "Department",
    division: "Division",
    ticketid: "Ticket ID",
    description: {
      title: "Description",
      add: "Add Description",
      hide: "Hide Description",
      show: "Show Description",
    },
    publicVote: "Public Vote",
    privateVote: "Private Vote",
    votersList: "Voters List",
    countable: {
      vote: "Vote | Votes",
      voter: "Voter | Voters"
    },
    modal: {
      back: "Back",
      cancel: "Cancel",
      confirm: "Confirm"
    },
    edit: "Edit",
  },
  navbar: {
    home: "Home",
    voting: "Voting",
    about: "About",
    help: "Help",
    contactUs: "Contact Us",
    adminShowUsers: "User Lists",
    blockchain: "Blockchain",
    login: "Login",
    language: "Current Language",
    news: {
      title: "News",
      loadingNews: "Loading...",
      noMoreNews: "No more news",
      loadMoreNews: "Load more news",
      add: "Add"
    },
    notification: {
      title: "Notifications",
      loadingNotifications: "Loading...",
      noMoreNotifications: "No more notifications",
      loadMoreNotifications: "Load more notifications",
    },
    user: {
      title: "User Info",
      welcome: "Welcome to E-Voting",
      anonymous: "Anonymous",
      switchRoleMode: "Switch mode to",
      desyncTime: "Desync time"
    },
    logout: "Logout"
  },
  privacyPolicy: {
    title: "Private Policy"
  },
  cookiePolicy: {
    title: "Cookie Policy"
  },
  notification: {
    topicStart: "Topic Started",
    requestPermission: {
      title: "Request Permission",
      inProgress: "in progress",
      approved: "approved",
      rejected: "rejected"
    }
  },
  home: {
    title: "Home",
    header: "DGA E-Voting Service on Blockchain"
  },
  about: {
    title: "About",
  },
  help: {
    title: "Help",
    pdf: "PDF",
    googleDocsVersion: "Google Docs Version",
  },
  contactUs: {
    title: "Contact Us",
    info: {
      address1: "Digital Government Development Agency (Public Organization) (DGA)",
      address2: "17th Floor, Bangkok Thai Tower Building 108 Rangnam Rd. Phayathai, Ratchatewi, Bangkok 10400, Thailand",
      tels: "Tel:",
      email: "Email:",
      contactCenter: "DGA Contact Center:",
    }
  },
  login: {
    title: "Login",
    loginDigitalId: "Login with Digital ID",
    loginWithGoogle: "Login with Google",
    registerDigitalId: "Register with Digital ID",
  },
  role: {
    guest: "Guest",
    voter: "Voter",
    admin: "Admin",
    developer: "Developer",
  },
  news: {
    title: "News",
    id: "News ID",
    create: {
      title: "Create News",
      confirm: "Confirm Create News?",
      action: "Create News",
      success: "Create News Successful",
      failed: "Create News Failed",
    },
    edit: {
      title: "Edit News",
      confirm: "Confirm Edit News?",
      action: "Edit News",
      success: "Edit News Successful",
      failed: "Edit News Failed",
    },
    required: "Required",
    newsTitle: "Title",
    author: "Author",
    content: "Content",
    references: "References",
    publishAt: "Publish At",
    publishTime:  {
      title: "Publish",
      date: "Publish date",
      time: "Publish time",
    },
    newsExpired: "Expired",
    expiredTime: {
      date: "Expired Date",
      time: "Expired Time",
    },
    anonymous: "Anonymous",
    noReference: "No References"
  },
  requestPermissions: {
    add: {
      title: "Add Request Permissions",
      noteToApprover: "Note",
      requestTo: {
        title: "Request to",
        moderator: "Moderator",
        developer: "Developer"
      },
      allowConsent: "Allow to use personal Data for approver",
      action: "Add Request",
      success: "Add Request Successful",
      failed: "Add Request Failed",
      pendingBlocked: "Please wait before request again",
    },
    change: {
      title: "Change Permissions",
      action: "Change",
      confirm: "Confirm to Change Permissions?",
      success: "Change Permissions Successful",
      failed: "Change Permissions Failed",
    },
    permissions: "Permissions",
    note: "Note",
    noteNone: "None",
    approveRequestPermissions: "Approve Request Permission",
    requestsNotFound: "Requests not found",
    approve: "Approve",
    manageApproveList: "Manage Approve List",
    reject: "Reject",
    userid: "User ID",
    personalData: "Personal Data",
    citizenid: "Citizen ID",
    name: "Name",
    email: "Email"
  },
  permissions: {
    "request-permissions": "Request More Permissions",
    "voter-mode": "Access Voter Mode",
    "request-topic": "Request New Topic",
    "admin-mode": "Access Admin Mode",
    "dev-mode": "Access Developer Mode",
    "vote-topic": "Vote Topics",
    "create-topic": "Create New Topics",
    "change-topic": "Change Topic Data",
    "change-permissions:basic": "Change Basic Permissions",
    "change-permissions:advance": "Change Advance Permissions",
  },
  admin: {
    user: {
      title: "User List",
      changePermissions: "Change Permissions",
      showAllUsers: "Show All Users",
    },
    blockchain: {
      title: "Blockchain Admin",
      blockInfo: {
        title: "Block Info",
        total: "Total",
        mined: "Confirmed",
        pending: "Pending",
        invalid: "Invalid",
      },
      serverStatus: {
        title: "Server Status",
        total: "Total",
        online: "Online",
        offline: "Offline",
      },
      searchTx: "Search TX",
      txhash: "TX Hash",
      voteid: "Vote ID",
      txInfo: "Tx Info",
      liveTxUpdate: "Live TX Update",
      type: {
        title: "Type",
        vote: "Vote",
        result: "Vote Result"
      },
      createdAt: "Created At",
      status: "Status",
      detail: "Detail",
      transactionData: "TX Data",
      transactionRawData: "Raw TX Data",
    },
  },
  timePeriod: {
    nearZeroMinute: "Less than a minute",
    minute: "Mins",
    hour: "Hours",
    day: "Days",
  },
  error: {
    title: "Error",
    backToHome: "Back to Home"
  },
  loading: "Loading",
  cookieConsent: {
    useCookie: "This website use cookies",
    acceptAll: "Accept All",
    acceptRequiredOnly: "Accept Required-Only",
  }
}