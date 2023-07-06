export default {
  appName: "DGA E-Voting",
  app: {
    loading: "Loading",
    offlineMode: "Maintenance Closed From",
    navbar: {
      adminShowUsers: "User Lists",
      blockchain: "Blockchain",
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
        desyncTime: "Desync time",
      },
      withdrawUser: {
        title: "Withdraw User",
        confirm1: "Do you want to withdraw yourself from E-Voting?",
        confirm2: "This action is irreversible",
      },
      target: "Target",
      go: "Go",
      logout: "Logout"
    },
    home: {
      title: "Home",
      header: "DGA E-Voting Service on Blockchain"
    },
    about: {
      title: "About",
    },
    login: {
      title: "Login",
      loginDigitalId: "Login with Digital ID",
      loginThaId: "Login with ThaId",
      registerDigitalId: "Register with Digital ID",
    },
    preferences: {
      title: "Preferences",
      userInfo: "User Info",
      topMenu: {
        title: "Top Menu",
        order: "Menu Order",
        remainTopMenu: "Remain Menu",
        currentTopMenu: "Current Menu",
      },
      isGovOfficer: "Government Officer",
      typeToEdit: "Type to edit",
      action: "Edit",
      confirm: "Confirm to Edit Preferences?",
      success: "Edit Preferences Successful",
      failed: "Edit Preferences Failed",
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
      withDepartment: "With Department",
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
      },
      csvSearch: "Import CSV",
      csvInserted: "Inserted",
      distinctVotes: "Limited 1 ballot per vote",
      anonymousVotes: "Allow Anonymous to Vote",
      notifyUsers: "Send notice to users",
      showCreator: "Show Creator to Public",
      recordBlockchain: "Record to Blockchain",
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
        accessModifier: "Filter",
        ticketIdPlaceholder: "#Ticket Vote",
        topicNamePlaceholder: "Topic Question",
        search: "Go",
      },
      period: "Peroid",
      expired: "Close",
      createdBy: "Created by",
      voteOn: "Vote on",
      loadMoreTopic: "Load more topics",
      noMoreTopic: "No more topic",
      qrcode: "QR Code",
      createTopic: "Create",
      avaliableTopic: "All Avaliable",
      editTopic: "Edit",
      recreateTopic: "Recreate",
      status: {
        waiting: "Waiting",
        result: "Result",
        access: "Access",
        control: "Control",
        voting: "Voting",
        voted: "Voted",
        finished: "Finished",
      },
      error: {
        title: "Noticed!!",
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
      pauseCauseTitle: "Enter Reason of Pause",
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
      multipleVotes: "Multiple Choices",
      totalVotes: "Total Votes",
      remove: "Remove User",
      searchUser: "Search User",
      addUser: "Add User",
      error: {
        duplicated: "Duplicated User",
        notFound: "User Not Found",
      }
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
        transactionData: "TX Data",
        transactionRawData: "Raw TX Data",
      },
      config: {
        title: "System Config",
        content: "Content",
        homeContent: "Home Content",
        aboutContent: "About Content",
        contactUsContent: "Contact Us Content",
        confirm: "Confirm to Edit Configurations?",
        success: "Edit Configurations Successful",
        failed: "Edit Configurations Failed",
      }
    },
    help: {
      title: "Help",
      pdf: "PDF",
      googleDocsVersion: "Google Docs Version",
    },
    contactUs: {
      title: "Contact Us",
      info: {
        company: "Digital Government Development Agency (Public Organization) (DGA)",
        address: "17th Floor, Bangkok Thai Tower Building 108 Rangnam Rd. Phayathai, Ratchatewi, Bangkok 10400, Thailand",
        tels: "Tel:",
        email: "Email:",
        contactCenter: "DGA Contact Center:",
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
    topicType: {
      public: "Public Vote",
      private: "Private Vote",
      internal: "Internal Vote"
    },
    votersList: "Voters List",
    permissions: {
      "request-permissions": "Request More Permissions",
      "voter-mode": "Access Voter Mode",
      "admin-mode": "Access Admin Mode",
      "dev-mode": "Access Developer Mode",
      "vote-topic": "Vote Topics",
      "create-topic": "Create New Topics",
      "change-topic": "Change Topic Data",
      "control-topic": "Control Topic",
      "create-news": "Create News",
      "change-news": "Change News",
      "change-permissions": "Change Permissions to Others",
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
      manageApproveList: "Manage Approve List",
      approve: "Approve",
      reject: "Reject",
      personalData: "Personal Data",
    },
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    termCondition: "Term and Conditions",
    sendFeedback: "Send Feedback",
    countable: {
      vote: "Vote | Votes",
      voter: "Voter | Voters"
    },
    timePeriod: {
      nearZeroMinute: "Less than a minute",
      minute: "Mins",
      hour: "Hours",
      day: "Days",
    },
    modal: {
      back: "Back",
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm"
    },
    anonymous: "Anonymous",
    role: {
      guest: "Anonymous",
      voter: "Voter",
      admin: "Admin",
      developer: "Developer",
    },
    required: "Required",
    optional: "Optional",
    selectAll: "Select All",
    deselectAll: "Deselect All",
    select: "Select",
    deselect: "Deselect",
    moveToTop: "Move to Top",
    moveUp: "Move Up",
    moveDown: "Move Down",
    moveToBottom: "Move to Bottom",
    add: "Add",
    edit: "Edit",
    change: "Change",
    revert: "Revert",
    remove: "Remove",
    detail: "Detail",
    error: {
      title: "Error",
      backToHome: "Back to Home"
    },
  },
  userPreferences: {
    title: "Preferences",
    confirm: "Confirm to Edit User Preferences?",
    success: "Edit User Preferences Successful",
    failed: "Edit User Preferences Failed"
  },
  notification: {
    topic: {
      title: "Topic",
      voting: "Started",
      pause: "Paused",
      resume: "Resumed",
      finished: "Finished",
    },
    "request-permission": {
      title: "Request Permission",
      pending: "in progress",
      approved: "approved",
      rejected: "rejected"
    }
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
    noReference: "No References"
  },
  cookieConsent: {
    useCookie: "This website use cookies",
    acceptAll: "Accept All",
    acceptRequiredOnly: "Accept Required-Only",
  }
}