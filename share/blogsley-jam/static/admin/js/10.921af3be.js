(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{d322:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("q-page",{attrs:{padding:""}},[e.$apollo.loading?a("div",[e._v("Loading..")]):a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("q-list",{staticClass:"menu-list"},e._l(e.allImages.edges,(function(s){return a("q-item",{key:s.id,attrs:{to:"/images/"+s.node.id}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-image",inverted:"",color:"grey-6"}})],1),a("q-item-section",[e._v("\n          "+e._s(s.node.title)+"\n        ")])],1)})),1)],1)])},r=[],n=a("a599"),i=a.n(n),o=a("1b62"),u=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"fit"},[a("navbox-shell",[a("q-list",[a("q-item",{attrs:{to:"/images/create",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-image-plus"}})],1),a("q-item-section",[a("q-item-label",[e._v("Add Image")])],1)],1)],1)],1)],1)},l=[],_=a("534b"),m=a("9c80"),S={name:"DefaultNavbox",mixins:[_["a"]],props:[],components:{NavboxShell:m["a"]},methods:{}},c=S,d=a("2be6"),E=Object(d["a"])(c,u,l,!1,null,null,null),p=E.exports,h=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("header-shell",[a("h1",[a("q-icon",{staticClass:"header-icon",attrs:{name:"mdi-folder-image"}}),e._v("\n    Images\n  ")],1)])},b=[],g={name:"UsersHeader",mixins:[_["a"]],props:[],components:{},methods:{}},O=g,I=Object(d["a"])(O,h,b,!1,null,null,null),D=I.exports,A=a("1f9a"),N=a.n(A);function R(){var e=i()(["\nquery imageQuery {\n  allImages "," {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n"]);return R=function(){return e},e}var T=Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",PUBLIC_PATH:"/admin",SHELL:"/bin/bash",SESSION_MANAGER:"local/jakyl:@/tmp/.ICE-unix/3978,unix/jakyl:/tmp/.ICE-unix/3978",QT_ACCESSIBILITY:"1",COLORTERM:"truecolor",XDG_CONFIG_DIRS:"/etc/xdg/xdg-ubuntu:/etc/xdg",XDG_MENU_PREFIX:"gnome-",TERM_PROGRAM_VERSION:"1.45.0",GNOME_DESKTOP_SESSION_ID:"this-is-deprecated",GTK_IM_MODULE:"ibus",CONDA_EXE:"/home/kurtis/anaconda3/bin/conda",_CE_M:"",QT4_IM_MODULE:"ibus",MANDATORY_PATH:"/usr/share/gconf/ubuntu.mandatory.path",GNOME_SHELL_SESSION_MODE:"ubuntu",SSH_AUTH_SOCK:"/run/user/1000/keyring/ssh",XMODIFIERS:"@im=ibus",DESKTOP_SESSION:"ubuntu",SSH_AGENT_PID:"3874",NO_AT_BRIDGE:"1",GTK_MODULES:"gail:atk-bridge",DBUS_STARTER_BUS_TYPE:"session",PWD:"/home/kurtis/Dev/blogsley/blogsley/blogsley",XDG_SESSION_DESKTOP:"ubuntu",LOGNAME:"kurtis",XDG_SESSION_TYPE:"x11",GPG_AGENT_INFO:"/run/user/1000/gnupg/S.gpg-agent:0:1",XAUTHORITY:"/run/user/1000/gdm/Xauthority",VSCODE_GIT_ASKPASS_NODE:"/usr/share/code/code",WINDOWPATH:"2",HOME:"/home/kurtis",USERNAME:"kurtis",IM_CONFIG_PHASE:"1",LANG:"en_US.UTF-8",LS_COLORS:"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",XDG_CURRENT_DESKTOP:"Unity",GIT_ASKPASS:"/usr/share/code/resources/app/extensions/git/dist/askpass.sh",INVOCATION_ID:"f605ce586b5e4276969a019a80d6d641",MANAGERPID:"3551",CHROME_DESKTOP:"code-url-handler.desktop",CLUTTER_IM_MODULE:"ibus",NVM_DIR:"/home/kurtis/.nvm",LESSCLOSE:"/usr/bin/lesspipe %s %s",XDG_SESSION_CLASS:"user",TERM:"xterm-256color",_CE_CONDA:"",DEFAULTS_PATH:"/usr/share/gconf/ubuntu.default.path",LESSOPEN:"| /usr/bin/lesspipe %s",USER:"kurtis",VSCODE_GIT_IPC_HANDLE:"/run/user/1000/vscode-git-cf0d790776.sock",CONDA_SHLVL:"0",DISPLAY:":1",SHLVL:"1",NVM_CD_FLAGS:"",QT_IM_MODULE:"ibus",DBUS_STARTER_ADDRESS:"unix:path=/run/user/1000/bus,guid=15a24e91ade8ec43a1edb0a25edc4502",CONDA_PYTHON_EXE:"/home/kurtis/anaconda3/bin/python",XDG_RUNTIME_DIR:"/run/user/1000",VSCODE_GIT_ASKPASS_MAIN:"/usr/share/code/resources/app/extensions/git/dist/askpass-main.js",JOURNAL_STREAM:"9:56515",XDG_DATA_DIRS:"/home/kurtis/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/home/kurtis/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/share/ubuntu:/home/kurtis/.local/share/flatpak/exports/share/:/var/lib/flatpak/exports/share/:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",PATH:"/home/kurtis/.yarn/bin:/home/kurtis/.local/bin:/home/kurtis/.cargo/bin:/home/kurtis/.yarn/bin:/home/kurtis/.nvm/versions/node/v12.14.1/bin:/home/kurtis/.local/bin:/home/kurtis/anaconda3/condabin:/home/kurtis/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",GDMSESSION:"ubuntu",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus,guid=15a24e91ade8ec43a1edb0a25edc4502",NVM_BIN:"/home/kurtis/.nvm/versions/node/v12.14.1/bin",GIO_LAUNCHED_DESKTOP_FILE_PID:"5051",GIO_LAUNCHED_DESKTOP_FILE:"/usr/share/applications/code.desktop",OLDPWD:"/home/kurtis/Dev/blogsley",TERM_PROGRAM:"vscode",_:"/home/kurtis/.yarn/bin/quasar",QUASAR_CLI_VERSION:"1.0.7",SERVER_URL:"http://127.0.0.1:5000",GRAPHQL_URL:"http://127.0.0.1:5000/graphql/",SUBSCRIPTIONS_URL:"ws://127.0.0.1:5000/graphql/",VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/admin/",APP_URL:"undefined"}).STANDALONE?"@client":"",v=N()(R(),T),k={name:"Images",mixins:[o["b"],o["a"]],data:function(){return{title:"Images",authorId:this.$route.params.authorId}},apollo:{allImages:{query:v,fetchPolicy:"network-only",variables:function(){return{authorId:this.authorId}}}},methods:{onSwitch:function(){this.setView(this),this.setNavbox(p),this.setHeader(D)}}},L=k,f=Object(d["a"])(L,t,r,!1,null,null,null);s["default"]=f.exports}}]);