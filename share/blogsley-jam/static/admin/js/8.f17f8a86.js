(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"722a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("Form",{attrs:{image:this.image}})],1)},n=[],s=a("a599"),r=a.n(s),o=a("1f9a"),u=a.n(o),l=a("1b62"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit"},[a("navbox-shell",[a("q-list",[a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.go(-1)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-chevron-left"}})],1),a("q-item-section",[a("q-item-label",[e._v("Back")])],1)],1),a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.view.save()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"save"}})],1),a("q-item-section",[a("q-item-label",[e._v("Save")])],1)],1),a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.view.destroy()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"delete"}})],1),a("q-item-section",[a("q-item-label",[e._v("Delete")])],1)],1)],1)],1)],1)},c=[],d=a("534b"),_=a("9c80"),p={name:"DefaultNavbox",mixins:[d["a"]],props:[],components:{NavboxShell:_["a"]},methods:{}},E=p,b=a("2be6"),S=Object(b["a"])(E,m,c,!1,null,null,null),h=S.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header-shell",[a("h1",[a("q-icon",{staticClass:"header-icon",attrs:{name:"mdi-folder-image"}}),e._v("\n    Image\n  ")],1)])},f=[],A={name:"UsersHeader",mixins:[d["a"]],props:[],components:{},methods:{}},D=A,O=Object(b["a"])(D,g,f,!1,null,null,null),v=O.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fields"},[a("q-input",{attrs:{outlined:"",autocomplete:"title",label:"Title"},model:{value:e.image.title,callback:function(t){e.$set(e.image,"title",t)},expression:"image.title"}}),a("q-input",{attrs:{outlined:"",autocomplete:"filename",label:"Filename",readonly:""},model:{value:e.image.filename,callback:function(t){e.$set(e.image,"filename",t)},expression:"image.filename"}}),a("q-img",{staticStyle:{height:"140px","max-width":"150px"},attrs:{src:e.image.src}})],1)},R=[],N={mixins:[l["b"]],props:{image:{default:function(){return{title:"",filename:""}}}},components:{},data:function(){return{}},computed:{imgSrc:function(){return 0===this.image.filename.length?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":"http://127.0.0.1:5000/images/"+this.image.filename+"?w=200&h=160"}},mounted:function(){},beforeDestroy:function(){},methods:{}},T=N,k=Object(b["a"])(T,I,R,!1,null,null,null),x=k.exports;function L(){var e=r()(["\n          mutation ($id: ID!) {\n            deleteImage(id: $id) "," {\n              ok\n            }\n          }"]);return L=function(){return e},e}function U(){var e=r()(["\n          mutation ($id: ID!, $data: ImageInput!) {\n            updateImage(id: $id, data: $data) "," {\n              ok\n            }\n          }"]);return U=function(){return e},e}function M(){var e=r()(["\n        query imageQuery($id: ID!) {\n          image(id: $id) "," {\n            id\n            title\n            filename\n            src\n          }\n        }"]);return M=function(){return e},e}var P=Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",PUBLIC_PATH:"/admin/",SHELL:"/bin/bash",SESSION_MANAGER:"local/jakyl:@/tmp/.ICE-unix/4963,unix/jakyl:/tmp/.ICE-unix/4963",COLORTERM:"truecolor",XDG_CONFIG_DIRS:"/etc/xdg/xdg-ubuntu:/etc/xdg",XDG_MENU_PREFIX:"gnome-",TERM_PROGRAM_VERSION:"1.44.2",GNOME_DESKTOP_SESSION_ID:"this-is-deprecated",GTK_IM_MODULE:"ibus",CONDA_EXE:"/home/kurtis/anaconda3/bin/conda",_CE_M:"",QT4_IM_MODULE:"ibus",MANDATORY_PATH:"/usr/share/gconf/ubuntu.mandatory.path",GNOME_SHELL_SESSION_MODE:"ubuntu",SSH_AUTH_SOCK:"/run/user/1000/keyring/ssh",XMODIFIERS:"@im=ibus",DESKTOP_SESSION:"ubuntu",SSH_AGENT_PID:"4850",NO_AT_BRIDGE:"1",GTK_MODULES:"gail:atk-bridge",DBUS_STARTER_BUS_TYPE:"session",PWD:"/home/kurtis/Dev/blogsley/blogsley/blogsley",LOGNAME:"kurtis",XDG_SESSION_DESKTOP:"ubuntu",XDG_SESSION_TYPE:"x11",GPG_AGENT_INFO:"/run/user/1000/gnupg/S.gpg-agent:0:1",XAUTHORITY:"/run/user/1000/gdm/Xauthority",WINDOWPATH:"2",HOME:"/home/kurtis",USERNAME:"kurtis",IM_CONFIG_PHASE:"1",LANG:"en_US.UTF-8",LS_COLORS:"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",XDG_CURRENT_DESKTOP:"Unity",INVOCATION_ID:"b5d702c15215483a8348f8b43f166777",MANAGERPID:"4580",CHROME_DESKTOP:"code-url-handler.desktop",CLUTTER_IM_MODULE:"ibus",NVM_DIR:"/home/kurtis/.nvm",LESSCLOSE:"/usr/bin/lesspipe %s %s",XDG_SESSION_CLASS:"user",TERM:"xterm-256color",_CE_CONDA:"",DEFAULTS_PATH:"/usr/share/gconf/ubuntu.default.path",LESSOPEN:"| /usr/bin/lesspipe %s",USER:"kurtis",CONDA_SHLVL:"0",DISPLAY:":1",SHLVL:"1",NVM_CD_FLAGS:"",QT_IM_MODULE:"ibus",DBUS_STARTER_ADDRESS:"unix:path=/run/user/1000/bus,guid=c44740871d92b85f8a2a23625eaca75b",CONDA_PYTHON_EXE:"/home/kurtis/anaconda3/bin/python",XDG_RUNTIME_DIR:"/run/user/1000",JOURNAL_STREAM:"9:56455",XDG_DATA_DIRS:"/home/kurtis/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/home/kurtis/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/share/ubuntu:/home/kurtis/.local/share/flatpak/exports/share/:/var/lib/flatpak/exports/share/:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",PATH:"/home/kurtis/.yarn/bin:/home/kurtis/.local/bin:/home/kurtis/.cargo/bin:/home/kurtis/.yarn/bin:/home/kurtis/.nvm/versions/node/v12.14.1/bin:/home/kurtis/.local/bin:/home/kurtis/anaconda3/condabin:/home/kurtis/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",GDMSESSION:"ubuntu",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus,guid=c44740871d92b85f8a2a23625eaca75b",NVM_BIN:"/home/kurtis/.nvm/versions/node/v12.14.1/bin",GIO_LAUNCHED_DESKTOP_FILE_PID:"15220",GIO_LAUNCHED_DESKTOP_FILE:"/usr/share/applications/code.desktop",OLDPWD:"/home/kurtis/Dev/blogsley",TERM_PROGRAM:"vscode",_:"/home/kurtis/.yarn/bin/quasar",QUASAR_CLI_VERSION:"1.0.7",SERVER_URL:"http://127.0.0.1:5000",AUTH_USER:"admin",AUTH_PWD:"admin",GRAPHQL_URL:"http://127.0.0.1:5000/graphql/",SUBSCRIPTIONS_URL:"ws://127.0.0.1:5000/graphql/",VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/admin/",APP_URL:"undefined"}).STANDALONE?"@client":"",C={mixins:[l["b"],l["a"]],props:["id"],components:{Form:x},apollo:{image:{query:u()(M(),P),fetchPolicy:"network-only",variables:function(){return{id:this.imageId}}}},data:function(){return{title:"Image",imageId:this.$route.params.id}},mounted:function(){},beforeDestroy:function(){},methods:{save:function(){this.$apollo.mutate({mutation:u()(U(),P),variables:{id:this.imageId,data:this.image}}),this.$q.notify("Image Saved")},destroy:function(){var e=this;this.$apollo.mutate({mutation:u()(L(),P),variables:{id:this.id}}).then((function(t){e.$q.notify("Image Deleted"),e.$router.go(-1)}))},onSwitch:function(){this.setNavbox(h),this.setHeader(v)}}},G=C,q=Object(b["a"])(G,i,n,!1,null,null,null);t["default"]=q.exports}}]);