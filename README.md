# app-axes-os
App Axes para Gestão das Ordens de Serviço

Nome:
Axes Infra
Axes OS
Axes Force
Axes War
Axes Go

# FUNCIONALIDADES
Módulo Gestor
Listagem das Equipes
Listagem das OS (Em execução e encerradas)
Designação de Atendimentos
Estimativa de Tempo
Localização em Tempo Real da Equipe

Módulo Técnico
Listagem das OS em Execução
Estimativa de Tempo
Checklist do Atendimento
Anexar Fotos ao Atendimento
Assinatura do Cliente Direto no Aplicativo
Detalhes Técnicos do Cliente
Atualização dos Dados Técnicos do Cliente
Atualização da Localização do Cliente (Coordenadas Geográficas)
Encerramento de Atendimento
Funcionamento Offline
Pesquisa de Satisfação

::GITHUB::
https://github.com/kalleycorrea/app-axes-infra


::GOOGLE CLOUD PLATFORM::
Console Cloud
https://console.cloud.google.com/home/dashboard
Console APIs e Serviços
https://console.developers.google.com/apis/dashboard
https://console.cloud.google.com/apis/dashboard

Nível gratuito do Google Cloud Platform
	- uma avaliação gratuita por 12 meses com crédito de US$ 300
	- o programa Sempre gratuito
	https://cloud.google.com/free/
Limites de uso do Sempre gratuito
	https://cloud.google.com/free/docs/always-free-usage-limits
Gerenciar Contas de Faturamento
	https://console.cloud.google.com/billing
Definir alertas de orçamento
	https://cloud.google.com/billing/docs/how-to/budgets
Definir Cotas Por Projeto/Serviço
	https://console.cloud.google.com/iam-admin/quotas
	Understanding YouTube quota limits: total per day vs. per 100 seconds?
	https://stackoverflow.com/questions/41835710/understanding-youtube-quota-limits-total-per-day-vs-per-100-seconds
Perguntas frequentes - Nível gratuito do Google Cloud Platform (ERRO Maps JavaScript API: Cota Excedida)
	https://cloud.google.com/free/docs/frequently-asked-questions?_ga=2.19342008.-120857473.1548020458
Plano Premium
	https://developers.google.com/maps/premium/overview
	https://developers.google.com/maps/premium/usage-limits
	
API_KEY:
Kalley -> App-Axes-Infra: AIzaSyBhi_X0Xr2yOfdXrCP_qvIWiBSvaLCbZUQ (foi usada no app axes infra "index.html" até 20/01/2019)
Kalley -> Site Axes: AIzaSyDBG2hMZAZMcqFtjMXBWH43r550XRtR38U (foi usada no Site Axes até 20/01/2019)
Kalley -> My Project: AIzaSyAP2rN8DHBb6jUVB1gN_bi84qI_vBnj8xc (limites maiores, pois possui conta de faturamento, está inativa, preciso fazer upgrade para conta paga)
axestelecom -> App Axes Infra: AIzaSyDZ_AN1_M-9woJt4d4OV8h_N5G_7rX-ibw (usando no app rota.ts)

ERRO Maps JavaScript API: Cota Excedida
https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors
https://developers.google.com/maps/documentation/javascript/usage-and-billing
https://cloud.google.com/maps-platform/user-guide/account-changes/


# IONIC

OFFICIAL DOCUMENTATION
https://ionicframework.com/docs/
https://ionicframework.com/docs/intro/tutorial/
https://ionicframework.com/docs/native/ (The successor to ngCordova)
	https://github.com/ionic-team/ionic-native
https://ionicframework.com/docs/pro/
https://ionicframework.com/docs/cli/serve/
https://creator.ionic.io/app/login	Ionic creator
https://market.ionicframework.com	Ionic Market
https://market.ionicframework.com/starters STARTERS -> Ionic starter apps, pre-built and ready to go.
http://lab.ionic.io/	http://lab.ionic.io/old.html	Ionic Lab
https://dashboard.ionicframework.com/welcome
Ionic DevApp
	https://ionicframework.com/docs/appflow/devapp/
	Run your Ionic app directly on your iOS or Android device
	Install DevApp: https://bit.ly/ionic-dev-app
https://ionicons.com/	https://ionicframework.com/docs/ionicons/

Ionic CLI -> The Ionic Command Line Interface (CLI) is your go-to tool for developing Ionic apps
Ionic CLI == Ionic, ou seja, a versão do CLI é a versão do Ionic

IONIC 3
	https://ionicframework.com/docs/v3/cli/

IONIC 4
	versão oficial a partir de 2019
	https://github.com/ionic-team/ionic-cli
	https://blog.ionicframework.com/announcing-ionic-4-beta/
	https://beta.ionicframework.com/docs/	
	https://beta.ionicframework.com/docs/building/starting/
	https://beta.ionicframework.com/docs/building/migration **Oficial**
		Upgrading an Ionic 3 application to Ionic 4
		https://moduscreate.com/blog/upgrading-an-ionic-3-application-to-ionic-4/

IONIC 3 X IONIC 4
- O tipo de projeto do Ionic v3 é "ionic-angular" e para v4 é "angular".
  --type=ionic-angular (default project type v3)
  --type=angular (default project type v4)	
  Se estiver incorreto em "ionic.config.json" a CLI poderá invocar os scripts de construção incorretos.
  Use o comando, "ionic start --help" para verificar as opções
  
- Google: REVERT IONIC 4 TO IONIC 3
	https://stackoverflow.com/questions/44152737/how-can-i-downgrade-my-ionic-cli-to-the-previous-version-i-had
	IONIC CLI VERSIONS (Changelogs)
		https://github.com/ionic-team/ionic-cli/blob/master/CHANGELOG.md
		v3 -> https://github.com/ionic-team/ionic-cli/blob/3.x/CHANGELOG.md
			  https://www.npmjs.com/package/ionic/v/3.20.1
		v4 -> https://github.com/ionic-team/ionic-cli/blob/develop/packages/ionic/CHANGELOG.md
			  https://www.npmjs.com/package/ionic
	Passos: 
	1) npm info ionic (list all versions of ionic)
	2) npm uninstall -g ionic
	3) npm install -g ionic@x.x.x	-> exemplo: npm install -g ionic@3.20.1		-> (3.20.1 última versão do ionic 3 até 26/01/2019)
	4) ionic --version
	
- Alterar ionic-angular para @ionic/angular
	npm uninstall ionic-angular (v3)
	npm install @ionic/angular (v4)

PRIMEIROS PASSOS
1) Preparação do Ambiente
	Projeto app-axes-os criado em Ionic 4, baseado no starter "super" que foi criado no Ionic 3.
	ATENÇÃO: Os paccotes e plugins tem que ser para a versão 3 do Ionic, ou seja, tem que ser funcional para o Ionic 3.
	https://nodejs.org/
	Em Node.js command:
	npm info <nome-do-pacote> (lista detalhes e versões do pacote)
	npm install -g npm@late
	npm install -g @angular/cli
	npm install -g cordova
	npm install -g ionic
		Update available (4.3.1 → 4.5.0)
		npm i -g ionic to update
		or
		npm install -g ionic@latest
	https://www.npmjs.com/
	https://git-scm.com/ (usando esse o Git Bash, ao invés de GitHub Desktop)
	https://desktop.github.com/ (GitHub Desktop)
	https://choosealicense.com/	Choose an open source license
	https://getcomposer.org (Dependency Manager for PHP)
	https://codepen.io/superpikar/pen/adqGyX (Ionic - Wordpress REST API starter)
	https://angular.io
	https://cli.angular.io/
	https://github.com/angular/angular-cli/wiki

	ATENÇÃO: Angular is running in the development mode. Call enableProdMode() to enable the production mode.
	How to update Cordova?	https://ionic.zone/cordova/update

2) Início do Desenvolvimento
	abrir o prompt de comando (Node.js ou Windows)
		cd C:\Projetos\
		iniciar um novo projeto Ionic: 
		ionic start app-axes-os super --type=ionic-angular (ionic-angular: default project type Ionic v3)
	criar o repositório "app-axes-os" no https://github.com
	editar o arquivo ".git\config" para configurar "Remote Repository" e "Upstream Branch Master", pois o "ionic start" cria a pasta ".git", 
	mas sem essas referências. Adicionar as duas tags abaixo no final do arquivo:
		[remote "origin"]
			url = https://github.com/kalleycorrea/app-axes-os.git
			fetch = +refs/heads/*:refs/remotes/origin/*
		[branch "master"]
			remote = origin
			merge = refs/heads/master
	ou executar, respectivamente, os comandos no prompt Git Bash:
		git remote add origin https://github.com/kalleycorrea/app-axes-os.git (git remote add <name> <url>)
		git push --set-upstream origin master
			ou usar o primeiro "git push" com a opção -u -> git push -u origin master
			
	abrir o prompt de comando Git Bash (https://git-scm.com/) no diretório do app "C:\Projetos\app-axes-os"
		"ionic start" já faz o "Initial commit" dos arquivos do projeto, então falta executar o "git push" para enviar esses arquivos ao repositório remoto, https://github.com/kalleycorrea/app-axes-os.git
		git push -u origin master
			a opção "-u origin master" cria uma "upstream tracking connection" e é especialmente útil ao publicar uma ramificação local em um remoto pela primeira vez.
			depois de configurar essa conexão de rastreamento, você pode realizar futuros envios sem fornecer opções adicionais, use somente: git push

		editar o arquivo README.md -> Novo conteúdo: "App Axes para Gestão das Ordens de Serviço"
		git commit -a -m "Clear README.md"
		git push
	add plugin cordova camera
		ionic cordova plugin add cordova-plugin-camera
		
		
Git Commands
	Referências
		https://www.git-tower.com/learn/git/commands
		Usage Examples
			https://www.git-tower.com/learn/git/commands/git-push
			https://www.git-tower.com/learn/git/commands/git-commit
		
	Configurações recomendadas pelo github.com quando se cria um novo repositório vazio no github.com:
	…create a new repository on the command line
		echo "# app-axes-os" >> README.md
		git init
		git add README.md
		git commit -m "first commit"
		git remote add origin https://github.com/kalleycorrea/app-axes-os.git
		git push -u origin master

	…or push an existing repository from the command line
		git remote add origin https://github.com/kalleycorrea/app-axes-os.git
		git push -u origin master

IONIC START
ionic start <name> <template> [options]
	ionic start --help
	ionic start --list (Listar templates starter disponíveis)	
	ionic start nome-do-app [blank|tabs|sidemenu|super]
	–appname ou -a: define o nome do aplicativo. Ex.: “Cálculo de IMC”
	–id ou -i: define o Id do aplicativo. Ex.: com.fabricadecodigo.calculoimc
	Examples
		ionic start
		ionic start --list
		ionic start myApp
		ionic start myApp blank
		ionic start myApp tabs --cordova
		ionic start myApp tabs --capacitor
		ionic start myApp super --type=angular
		ionic start myApp blank --type=ionic1 (Para iniciar um aplicativo com legacy Ionic v1, use --type=ionic1) (e.g. angular, ionic-angular, ionic1)
		ionic start cordovaApp tabs --cordova
		ionic start "My App" blank
		ionic start "Conference App" https://github.com/ionic-team/ionic-conference-app
		
	--type ... Type of project to start (e.g. angular, ionic-angular, ionic1) 
		Erro: Unable to find starter template for super
			Ocorre quando se tenta criar um projeto com o "starter super" usando o Ionic 4, pois o "super" está definido com starter funcional até o Ionic 3.
			Solução: Adicionar a opção --type ao comando "ionic start"
			ionic start app-axes-os super --type=ionic-angular
			https://github.com/ionic-team/ionic-starter-super/issues/108
				Install the latest CLI with npm install -g ionic@latest and you should be able to download the super template.
				Essa solução (sem a opção --type=ionic-angular) funciona somente se estiver usando o Ionic v3, pois o default type do Ionic 3 é "ionic-angular"
	
adicionar as plataformas do aplicativo
	por padrão vem configurado para executar somente no navegador, não confundir com a plataforma "cordova browser" usada utilizar recursos nativos locais.
	ionic cordova platform --help
	ionic cordova platform add android
	ionic cordova platform add browser (plataforma para usar no navegador alguns recursos nativos, por exemplo a camera)
	
executar o aplicativo
	ionic serve -c (navegador)
  ionic serve --devapp (Executar no DevApp)
	ionic cordova run --help
		ionic cordova run android -l (device)
			Atenção: Criar uma variável de ambiente SLAVE_AAPT_TIMEOUT = 180 para evitar erro de timeout
			adb devices -> List of devices attached
      local apk: C:\Projetos\app-axes-os\platforms\android\app\build\outputs\apk\debug
      To deploy and debug apps on an Android device
        https://ionicframework.com/docs/building/running
		ionic cordova run browser (navegador com recursos nativos)
	ionic cordova emulate --help (executar no emulador)
	
gerar a versão executável do aplicativo
	ionic build --help
  ionic build --platform=android --prod
  ionic cordova build android --prod --release (ok)
  local apk: C:\Projetos\app-axes-os\platforms\android\app\build\outputs\apk\release\

  Publishing your app
  https://ionicframework.com/docs/v1/guide/publishing.html

  Abrir keytool.exe no CMD
    "C:\Program Files\Java\jdk1.8.0_191\bin\keytool.exe" -genkey -v -keystore key-app-axesos.keystore -alias app-axesos -keyalg RSA -keysize 2048 -validity 10000

  Abrir jarsigner.exe no CMD
  "C:\Program Files\Java\jdk1.8.0_191\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key-app-axesos.keystore app-release-unsigned.apk app-axesos

  Abrir jarsigner.exe
  "C:\Users\kalley.AXXESS\AppData\Local\Android\Sdk\build-tools\28.0.3\zipalign.exe" -v 4 app-release-unsigned.apk AxesOS.apk

  How to solve the “App not installed” error on Android devices?
  https://forum.ionicframework.com/t/how-to-solve-the-app-not-installed-error-on-android-devices/139401
  https://www.digitbin.com/app-not-installed-fix-error/

	
Icon e Splash
	Inclua um arquivo icon.png, icon.psd ou icon.ai na pasta resources do projeto (tamanho mínimo da imagem seja 192px x 192px)
	Inclua um arquivo splash.png, splash.psd ou splash.ai na pasta resources do projeto (tamanho mínimo da imagem seja 2208px x 2208px)
		ionic resources --icon
		ionic cordova resources --help

criar pagina
	ionic g page nome-da-pagina
criar provider ()
	ionic g provider nome-do-provider
criar pipe
  ionic g pipe nome-do-pipe

	
ADD PACOTES E PLUGINS NO PROJETO

"npm install" in your project directory will reinstall all your node modules according to package.json
	rm -r node_modules
	rm package-lock.json
	npm install

adicionar pacote
	npm install <nome-do-pacote> -> ex: npm install @ionic/angular
remover pacote
	npm uninstall <nome-do-pacote> -> ex: npm uninstall ionic-angular
	
Atualizar Dependências do Projeto (package.json)
	Problema: npm WARN @ionic-native/splash-screen@3.12.1 requires a peer of @ionic-native/core@^3.6.0 but none is installed. You must install peer dependencies yourself.
	Solução:
	https://www.npmjs.com/package/npm-check-updates
	1) First, run this command: 
		npm install npm-check-updates -g
	2) To see what new versions are available:
		ncu
	3) To automatically updates to the latest packages:
		ncu -u
	4) npm install
	Atenção: O pacote npm-check-updates (ncu e ncu -u) modifica apenas o seu arquivo package.json. Execute 'npm install' para atualizar seus pacotes instalados e package-lock.json.


ATENÇÃO: Antes de instalar um pacote nativo "@ionic-native/<nome-do-pacote>" referencie a versão compatível com o Ionic 3 no arquivo "package.json",
		 não havendo referencia o npm instala a última versão que provavelmente não é compatível com o Ionic 3.
		 Exemplo:
		 -> package.json: "dependencies": { 
								...
								"@ionic-native/camera": "4.3.3",
								...
							}
		 -> Git Bash: npm install @ionic-native/camera
		 
		 Mas se não referenciar no "package.json, então instale o pacote nativo informando a versão compatível com o Ionic 3.
			npm install @ionic-native/camera@x.x.x

-Ionic Native https://github.com/ionic-team/ionic-native

-Camera
	https://ionicframework.com/docs/v3/native/camera/
	https://github.com/apache/cordova-plugin-camera
	https://www.npmjs.com/package/@ionic-native/camera (Versões)
	https://www.npmjs.com/package/cordova-plugin-camera
	
	ionic cordova plugin add cordova-plugin-camera
	npm install @ionic-native/camera
				@ionic-native/camera@4.3.3 (usei esse)
	Exemplos:
		https://forum.ionicframework.com/t/how-to-display-an-image-taken-from-camera/126832
		Google: ionic 3 camera example
			https://www.youtube.com/watch?v=5mZFE7h4RvI&index=24&list=PLswa9HeoJUq_Dphg3w1TwqBMgruzRCwIO Adicionando Chamada p/ Camera no App (2:20)
			https://www.youtube.com/watch?v=8NWzuz_qIQ0&index=25&list=PLswa9HeoJUq_Dphg3w1TwqBMgruzRCwIO Modificando Nossas Views p/ Chamada da Camera (0:52)
		Google: ionic 4 camera
		Google: ionic 4 ionic native camera

-Geolocation
	https://ionicframework.com/docs/v3/native/geolocation/
	https://github.com/apache/cordova-plugin-geolocation
	https://www.npmjs.com/package/@ionic-native/geolocation (Versões)
	
	ionic cordova plugin add cordova-plugin-geolocation@^4.0.1 --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
  npm install --save @ionic-native/geolocation
  npm install --save @ionic-native/geolocation@4.3.2
  npm install --save @ionic-native/geolocation@4.20.0
	npm install --save @ionic-native/geolocation@4.6.0

	Exemplos:
		https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
		https://www.joshmorony.com/using-google-maps-and-geolocation-in-ionic-with-capacitor/
		https://market.ionicframework.com/starters/google-maps -> Starter Google Maps
	
-Background Geolocation
	https://ionicframework.com/docs/v3/native/background-geolocation/
	https://github.com/mauron85/cordova-plugin-background-geolocation
	https://www.npmjs.com/package/@ionic-native/background-geolocation (Versões)
  https://www.npmjs.com/package/cordova-plugin-mauron85-background-geolocation (Versões)
	
	ionic cordova plugin add cordova-plugin-mauron85-background-geolocation
  ionic cordova plugin add cordova-plugin-mauron85-background-geolocation@alpha
  ionic cordova plugin add cordova-plugin-mauron85-background-geolocation@^2.3.6
  npm install --save @ionic-native/background-geolocation
  npm install --save @ionic-native/background-geolocation@4
  npm install --save @ionic-native/background-geolocation@3 (versão 3.14.0)
	npm install --save @ionic-native/background-geolocation@^3.12.1
	Exemplos:
		https://www.joshmorony.com/adding-background-geolocation-to-an-ionic-2-application/

-Background Mode
  ionic cordova plugin add cordova-plugin-background-mode (versão 0.7.2)
  npm install --save @ionic-native/background-mode@4 (versão 4.20.0)

-Local Notifications
  ionic cordova plugin add cordova-plugin-local-notification (versão 0.9.0-beta.2)
  npm install --save @ionic-native/local-notifications@4.7.0

-ionic-text-avatar
	Material Design text avatar for Ionic's ion-avatar
	https://github.com/Airblader/ionic-text-avatar
	npm install --save ionic-text-avatar
	
	Erro: Template parse errors: 'ion-text-avatar' is not a known element #1 -> https://github.com/Airblader/ionic-text-avatar/issues/1
    Solução: I work with lazy loading and then I have to add to page.module.ts what you described for app.module.ts.

-Signature Pad
  https://github.com/szimek/signature_pad
  https://github.com/wulfsolter/angular2-signaturepad
  npm install angular2-signaturepad --save

  Exemplos: 
    https://devdactic.com/signature-drawpad-ionic-2/
    https://www.youtube.com/watch?v=KpBEyvGA0OE
  
  Resize:
    https://www.9lessons.info/2017/04/ionic-3-and-angular-4-working-with.html (Resize implementado com base nesse)
    https://github.com/szimek/signature_pad/issues/268
    https://forum.ionicframework.com/t/ionic-2-signature-pad-resize-image/93624
    https://stackoverflow.com/questions/44454463/ionic2-signature-pad-resize-image
    Google: angular2 signaturepad resizeCanvas
      https://github.com/wulfsolter/angular2-signaturepad/issues/4
      https://github.com/szimek/signature_pad/issues/291
    Google: angular2 signaturepad resize after rotation device
      https://github.com/szimek/signature_pad/issues/91
    Google: angular2 signaturepad resize based in screen orientation
    Google: ionic whats event rotation device?
      https://forum.ionicframework.com/t/detect-the-screen-orientation-to-a-device/108637

  Erro: 'signature-pad' is not a known element:
    1. If 'signature-pad' is an Angular component, then verify that it is part of this module.
    2. If 'signature-pad' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
    Solução: Isso é por causa do "lazy loading". Então importar pelo page.module.ts e não por app.module.ts

-Ionic3 Star Rating
  https://github.com/melwinVincent/ionic3-star-rating
  https://www.npmjs.com/package/ionic3-star-rating
  npm install ionic3-star-rating
  Exemplo:
    https://stackblitz.com/edit/ionic3-star-rating

- Screen Orientation
  https://github.com/apache/cordova-plugin-screen-orientation
  https://github.com/ionic-team/ionic-native
  https://www.npmjs.com/package/@ionic-native/screen-orientation (Versões)

  ionic cordova plugin add cordova-plugin-screen-orientation
  npm install --save @ionic-native/screen-orientation
  npm install --save @ionic-native/screen-orientation@4.20.0 (usei esse)
  Exemplos:
    https://www.ghadeer.io/ionic-3-screen-orientation/


Erro: Cannot find module '@angular/core'. in my ionic app
	I solved this by delete node_modules folder from my project and run 'npm install' again.

Erro: index.js:181 Uncaught TypeError: Object(...) is not a function Cordova
	https://forum.ionicframework.com/t/ionic-4-beta-object-is-not-a-function/138152
	https://forum.ionicframework.com/t/camera-in-ionic-v4/137740/7
	https://forum.ionicframework.com/t/ionic-4-native-plugin-problem/136670/3

PIPES
  See https://angular.io/api/core/Pipe for more info on Angular Pipes.
  How to apply filters to *ngFor?
    https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
    https://embed.plnkr.co/l1oTNT/
  Exemplos de implementação:
    http://plnkr.co/edit/rLa1EcZC8uKw6MA2EXld?p=info
    https://forum.ionicframework.com/t/filtering-a-loop/78285/2


CONTEÚDO BÁSICO INICIAL
Como criar aplicativos com Ionic Framework	http://www.fabricadecodigo.com/como-criar-aplicativos-com-ionic-framework/
Como preparar o ambiente de desenvolvimento para o Ionic Framework	http://www.fabricadecodigo.com/como-preparar-o-ambiente-de-desenvolvimento-para-o-ionic-framework/
	Pontapé inicial com Angular 4	https://www.youtube.com/watch?v=WVoJfHfCsiI	(Série muito boa)
	Minicurso Angular 6	http://www.fabricadecodigo.com/minicursoangular/aula/	https://github.com/fabricadecodigo/minicurso-angular
	Angular #004 Breve análise sobre a forma como o Angular funciona	https://www.youtube.com/watch?v=Mk7x8rAnX-M
	Visual Studio Code -> Adicionar Extensão: Angular Extension Pack (Loiane Groner)
	Visual Studio Code -> Adicionar Extensão: Ionic Extension Pack (Loiane Groner)
	Visual Studio Code -> Adicionar Extensão: vscode-icons (Roberto Huertas)
	Visual Studio Code -> Adicionar Extensão: Auto Import (steoates)
	Visual Studio Code -> Adicionar Extensão: Git History (Don Jayamanne)
	Visual Studio Code -> Adicionar Extensão: Git Project Manager (Felipe Caputo)
	Visual Studio Code -> Adicionar Extensão: CSS Auto Prefix (sporiley)
4 starter templates do Ionic que você não conhecia	https://www.youtube.com/watch?v=n0J8Ykw1un0
	ionic start nome_do_app tutorial
	ionic start nome_do_app super	***muito bom*** 
		https://github.com/ionic-team/starters/tree/master/ionic-angular/official/super
		https://github.com/ionic-team/starters/blob/master/ionic-angular/official/super/README.md
	ionic start nome_do_app conference
	ionic start nome_do_app aws
Ionic 3 para iniciantes (Vídeos)	https://www.youtube.com/watch?v=mDPgmRlArPc&list=PLE4aWcuKhzABV7naOADbDusXVPRv58vd-	***muito bom***
Criando seu primeiro app com ngCordova e Ionic	http://www.fabricadecodigo.com/criando-seu-primeiro-app-com-ngcordova-e-ionic/
Criando o primeiro app com Ionic Framework	http://www.fabricadecodigo.com/criando-o-primeiro-app-com-ionic-framework/
Consumindo API REST com Ionic – O guia absolutamente completo	http://www.fabricadecodigo.com/rest-api-ionic/
Como armazenar dados offline com Ionic Storage	
	https://www.youtube.com/watch?v=dewZD47BpTY	
	http://www.fabricadecodigo.com/como-armazenar-dados-offline-com-ionic-storage/
	https://ionicframework.com/docs/storage/
	Salvar o token no Ionic Storage para usar em futuras requisições
		@ionic/storage -> https://forum.ionicframework.com/t/adding-authorization-header-in-get-request/91222
Como fazer um CRUD com SQLite no Ionic em alguns simples passos	https://www.youtube.com/watch?v=yWs2xceNCh0
Como criar CRUD com Angular e Firebase Realtime Database - Em alguns simples passos	https://www.youtube.com/watch?v=8FDwTjgLN48

Bons Materiais Educativos
http://www.fabricadecodigo.com
https://code.education/
Ionic 2 Beginners Guide 
https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/
Detailed Guide for learning Ionic (Building Mobile Apps with Ionic)
https://www.joshmorony.com/building-mobile-apps-with-ionic-2/


NAVIGATION
for more info on Ionic pages and navigation
https://ionicframework.com/docs/components/#navigation

Navigating Lifecycle Events
(ionViewDidLoad, ionViewWillEnter, ionViewDidEnter, ionViewWillLeave, ionViewDidLeave, ionViewWillUnload, ionViewCanEnter, ionViewCanLeave)
https://blog.ionicframework.com/navigating-lifecycle-events/

NavController -> Controladores de Navegação para navegar nas páginas do seu aplicativo
	this.navCtrl.setRoot(); //Define a page root
    this.navCtrl.push(Page, NavParams); //Push a new component onto the current navigation stack (abre a página)
	this.navCtrl.pop(); //Fecha a página (volta para a página anterior)
	

THEME
Theming your Ionic 3 App (Sass Variables)
https://robferguson.org/blog/2017/11/12/theming-your-ionic-3-app/
http://sass-lang.com/guide
https://ionicframework.com/docs/theming/theming-your-app/
https://ionicframework.com/docs/theming/sass-variables/
https://ionicframework.com/docs/theming/overriding-ionic-variables/	Lista Ionic Sass Variables
https://ionicframework.com/docs/theming/css-utilities/

Google: Ionic how use Sass Variables?
https://forum.ionicframework.com/t/ionic-how-to-use-sass-variable/116553	Ionic how to use sass variable

Aprenda Layout com CSS
http://pt-br.learnlayout.com/toc.html (Sumário)

Angular AuthService, HttpInterceptor, MessageService

Classe HttpClient - @angular/common/http -> https://angular.io/api/common/http/HttpClient

Google: ionic authentication by token
	https://www.joshmorony.com/using-json-web-tokens-jwt-for-custom-authentication-in-ionic-2-part-1/
	https://www.joshmorony.com/using-json-web-tokens-jwt-for-custom-authentication-in-ionic-2-part-2/
	https://dev.to/oktadev/build-an-ionic-app-with-user-authentication-4ig1
	Ionic 3 and Angular 4:Create a Welcome Page with Login and Logout	https://www.9lessons.info/2017/06/ionic3-angular4-create-welcome-page.html
	
Google: ionic basic auth
	*** https://angular.io/guide/http#adding-headers
	*** https://forum.ionicframework.com/t/api-call-with-basic-authorization/114346/3
	*** https://stackoverflow.com/questions/50639602/typescript-ionic-app-basic-auth-not-working
	https://stackoverflow.com/questions/38368794/angular-2-basic-authentication-not-working
	https://stackoverflow.com/questions/46211633/how-to-pass-username-and-password-with-api-in-angular
Google: ionic httpclient with set authorization header
	https://forum.ionicframework.com/t/adding-authorization-header-in-get-request/91222

Null and Undefined in TypeScript
	https://basarat.gitbooks.io/typescript/docs/javascript/null-undefined.html
	https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html

Google: ionic httpclient withcredentials
https://stackoverflow.com/questions/47304912/angular-4-setting-withcredentials-on-every-request-cors-cookie
	https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8 
	**(HttpInterceptor implementável, 
		mas por algum motivo desconhecido o servidor web (apache) que cria a variável global $_SERVER 
		não adiciona o elemento HTTP_AUTHORIZATION ou PHP_AUTH_USER/PHP_AUTH_PW que são informações de autenticação passadas na requisição do cliente.
		Verificar se o elemento (fazer novos testes) PHP_AUTH_DIGEST está incluído no array $_SERVER -> getServerParams())
https://stackoverflow.com/questions/38615205/angular-2-http-withcredentials
	https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
https://ionicframework.com/docs/native/http/
	https://forum.ionicframework.com/t/api-call-with-basic-authorization/114346/12	(API-call with Basic Authorization -> @ionic-native/http)

Ionic 3 Classe HttpClient
Add Headers
https://cursos.alura.com.br/forum/topico-classe-httpclient-post-60242 **(solução {headers})

Google: ionic enabled HTTP_AUTHORIZATION in server params
	https://github.com/WP-API/Basic-Auth/issues/21
https://stackoverflow.com/questions/43121316/angular-2-http-basic-auth-request-unable-to-enter-details
Cors
https://stackoverflow.com/questions/47304912/angular-4-setting-withcredentials-on-every-request-cors-cookie
https://blog.ionicframework.com/handling-cors-issues-in-ionic/
https://pt.stackoverflow.com/questions/317380/slim-php-problema-com-cors

Google: ionic authentication interceptor

Creating a Flash Message Service in Ionic	https://www.joshmorony.com/creating-a-flash-message-service-in-ionic/
	
Google: ionic callback update ion-list automatically like messages whatsapp
	WhatsApp Clone with Meteor and Ionic 2 CLI	https://angular-meteor.com/tutorials/whatsapp2/ionic/native-mobile

Google: ionic callback function to update ion-item
	ionic: ngFor not updating automatically after changes in array
		https://stackoverflow.com/questions/49052475/ionic-ngfor-not-updating-automatically-after-changes-in-array
	https://github.com/don/ionic-ble-examples/blob/master/scan/src/pages/home/home.ts
	https://blog.thoughtram.io/angular/2017/02/21/using-zones-in-angular-for-better-performance.html#the-idea-of-zones
	How to get a callback event when an ion-item becomes visible in the ion-list?
		https://stackoverflow.com/questions/33500221/how-to-get-a-callback-event-when-an-ion-item-becomes-visible-in-the-ion-list
	
Ionic Video Tutorial List	http://technotip.com/5036/ionic-2-video-tutorial-list/
Pull To Refresh: Ionic 2	http://technotip.com/5193/pull-to-refresh-ionic-2/
Passing Data Between Pages: Ionic 2	http://technotip.com/5085/passing-data-between-pages-ionic-2/
Add Ionic Pull to Refresh with Toast Message	https://devdactic.com/pull-to-refresh-ionic/

ion-refresher	https://ionicframework.com/docs/api/components/refresher/Refresher/
ion-spinner	https://ionicframework.com/docs/api/components/spinner/Spinner/
loading	https://ionicframework.com/docs/api/components/loading/LoadingController/
ion-infinite-scroll	
	https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/
	http://www.fabricadecodigo.com/rest-api-ionic/

Google: defining dynamically tab Badge ionic
		https://stackoverflow.com/questions/44929352/updating-tab-badge-dynamically-on-ionic-2 (com Ionic Events não funcionou)
			http://plnkr.co/edit/49JrogoS7a5FdtJz1JWi?p=preview (com Ionic Events não funcionou)
		Update tabs badge total from a different component
		https://forum.ionicframework.com/t/update-tabs-badge-total-from-a-different-component/74977 **(funcionou com Observables/Subjects)
		How to properly re-render a component in Ionic manually
		https://forum.ionicframework.com/t/how-to-properly-re-render-a-component-in-ionic-manually/97343 (com Ionic Events e NgZone não funcionou)

Entendendo RxJS Observable com Angular
https://medium.com/tableless/entendendo-rxjs-observable-com-angular-6f607a9a6a00
https://www.joshmorony.com/an-introduction-to-observables-for-ionic-2/
https://forum.ionicframework.com/t/using-observables-in-ionic/130838

Google: how work with two tabs page in ionic
	https://forum.ionicframework.com/t/different-tabs-on-detailpage/79278	Different tabs on DetailPage
	https://stackoverflow.com/questions/42090050/how-can-we-display-multiple-tabs-in-ionic-2-app
	https://github.com/ionic-team/ionic-conference-app exemplo
	https://github.com/tonymccallie/menutest exemplo

Google: ionic pass NavParams to ion-tab
	https://stackoverflow.com/questions/35162308/ionic-2-passing-tabs-navparams-to-tab

@ViewChild
Essas postagens explicam que as funções no componente personalizado precisam ser chamadas do pai, e isso pode ser feito 
usando @ViewChild ou #myComponent - uma variável local para o componente.
https://github.com/ionic-team/ionic/issues/12625
Google: ionic ViewChild
	https://angularfirebase.com/snippets/using-viewchild-in-ionic-4-to-call-component-methods/
	https://alligator.io/angular/viewchild-access-component/

Ionic3 - how to pass selected value to event using ion-select and ion-option?
https://stackoverflow.com/questions/47587603/ionic3-how-to-pass-selected-value-to-event-using-ion-select-and-ion-option

@ViewChild -> Exemplo 1
Botão Fabs aberto por padrão (Toggle -> Alternância)
Acessando um elemento Ionic (FabContainer) do .html (template/view)
	https://forum.ionicframework.com/t/fabs-button-open-by-default/108915/4 (Solução -> this.fab.toggleList())
		https://stackblitz.com/edit/ionic-fab-tab-open?file=pages%2Fhome%2Fhome.ts
	.TS:
		import { Component , ViewChild } from '@angular/core';
		import { FabContainer } from 'ionic-angular';
		//declaração
		@ViewChild('fab')fab : FabContainer;
		//exemplo de uso ionViewDidEnter()
		this.fab.toggleList();
	.HTML:
		<!-- identificador #fab -->
		<ion-fab top right edge #fab>

@ViewChild -> Exemplo 2
Acessando um elemento nativo (Div) do .html (template/view)
  .TS:
    import { Component, ViewChild, ElementRef } from '@angular/core';
    //declaração
    @ViewChild('map') mapElement: ElementRef;
    // Passando a div 'map' como parâmetro
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  .HTML:
    <ion-content> <div #map id="map"></div> </ion-content>


Ion-textarea resize height dynamically
	https://forum.ionicframework.com/t/solved-ion-textarea-resize-height-dynamically/80885/2
	https://forum.ionicframework.com/t/programmatically-set-height-or-rows-of-ion-textarea/72495

TypeScript -> Iterators and Generators (for, forEach)
	https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
	https://www.tutorialspoint.com/typescript/typescript_array_foreach.htm
  https://basarat.gitbooks.io/typescript/docs/for...of.html

TypeScript -> Interface para array de objetos associativos em TypeScript
	https://stackoverflow.com/questions/38213926/interface-for-associative-object-array-in-typescript

Google: typescript concat arrays
TypeScript -> Merge two object arrays with Angular 2 and TypeScript?
	https://www.tutorialspoint.com/typescript/typescript_array_concat.htm
		var alphaNumeric = alpha.concat(numeric); 
	https://basarat.gitbooks.io/typescript/docs/spread-operator.html
		Spread Operator -> list = [...list, 3, 4];
		this.results = [ ...this.results, ...data.results];
	
Gestures: tap, press, pan, swipe, rotate, and pinch events.
https://ionicframework.com/docs/v3/components/#gestures

DOM events
https://en.wikipedia.org/wiki/DOM_events

Unique Device ID
https://ionicframework.com/docs/v3/native/unique-device-id/


https://stackoverflow.com/questions/25221080/css-how-to-change-backgound-colour-for-item-avatar-in-ionicframework
https://stackoverflow.com/questions/31772742/changing-background-color-of-ionic-ion-item-in-css/31814759	Changing background color of Ionic ion-item in CSS

Add a badge on icon in Ionic 3
https://stackoverflow.com/questions/44990686/add-a-badge-on-icon-in-ionic-3
How to add a badge to a icon inside a ion-button?
https://forum.ionicframework.com/t/how-to-add-a-badge-to-a-icon-inside-a-ion-button/70868


No Access-Control-Allow-Origin’ header is present on the requested resource. 
Resolvendo problema do cors (no Ionic através de proxy)
	https://www.youtube.com/watch?v=eJ2GHVrg9UM&index=43&list=PLE4aWcuKhzABV7naOADbDusXVPRv58vd-
	https://blog.ionicframework.com/handling-cors-issues-in-ionic/


How to use ngIf condition in ionic and angular and display the view accordingly?
https://stackoverflow.com/questions/49604834/how-to-use-ngif-condition-in-ionic-and-angular-and-display-the-view-accordingly
<ng-container *ngIf="(card | async)?.length > 0; else noCard">
    <ion-row *ngFor="let c of card  | async">
        <img src="assets/imgs/{{c.cardtype}}.png" width="100%" height="30px">
        <button ion-button (click)="editCard(c)" clear color="core" class="text">Edit Card</button>
    </ion-row>
</ng-container>
<ng-template #noCard>
    <ion-row>
      <button ion-button (click)="addCard()" clear color="core" class="text">Add Card</button>
      <img src="http://placehold.it/200x100" width="100%" height="30px">
    </ion-row>
</ng-template>

Usando o atributo css Class
styles.scss
.icons-basic-page {
  ion-icon {
    font-size: 50px;
  }

  ion-row {
    height: 100%;
    flex-wrap: wrap;
  }

  ion-col {
    flex: 0 0 25%;
    max-width: 25%;
    text-align: center;
    padding: 10px 5px;
  }
}
uso no template: <ion-content text-center class="icons-basic-page">

Correct way to use image assets in Ionic 2
-> src/assets/img(recommended)
https://stackoverflow.com/questions/39952214/correct-way-to-use-image-assets-in-ionic-2


Google: ionic 4 introdução
https://www.djamware.com/post/5b5cffaf80aca707dd4f65aa/building-crud-mobile-app-using-ionic-4-angular-6-and-cordova
http://www.eng.com.br/artigo.cfm?id=6231
https://tableless.com.br/criando-uma-aplicacao-movel-com-ionic-2-e-angular-2-em-dez-passos/
https://www.youtube.com/channel/UCtbju6weZSTbF4HHvuJAytA	Canal Profissão Desenvolvedor
https://www.youtube.com/watch?v=r0A4-82uujg	Curso de Ionic 3 - Ferramentas, ambiente e primeiro projeto
https://www.youtube.com/watch?v=67A6E4VA5gA	Visual Studio Code: instalação e recursos básicos

https://ionicframework.com/docs/cli/starters.html
https://www.google.com/search?q=ionic+4+starter+template
https://www.google.com/search?q=ionic+4+template+google+maps
https://ionicthemes.com/products/tag/google-maps
https://ionicthemes.com/product/ion2fullapp-full-ionic2-app-template-elite-version
https://market.ionicframework.com/starters/event-app-and-maps

http://www.fabricadecodigo.com/google-maps-e-geolocalizacao-com-ionic/	***muito bom***
	https://developers.google.com/maps/documentation/javascript/tutorial
	https://ionicframework.com/docs/native/geolocation/
	https://developers.google.com/maps/documentation/javascript/directions
	https://developers.google.com/maps/documentation/maps-static/error-messages
	Google Maps encontrar coordenadas facilmente	http://www.mapcoordinates.net/pt
		const position = new google.maps.LatLng(-3.08365143, -60.06089347); //Minha Casa
		const position = new google.maps.LatLng(-3.08907235, -60.06175697); //Sede Axes
    Marker
      https://stackoverflow.com/questions/7095574/google-maps-api-3-custom-marker-color-for-default-dot-marker

		
Ionic 2 & 3: How to Use Google Maps & Geolocation	
https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
Part 2: Using the $http Service in Ionic 1.x to Dynamically Load Google Map Markers
https://www.joshmorony.com/part-1-using-the-http-service-in-ionic-to-dynamically-load-google-map-markers/ 
https://stackoverflow.com/questions/45331947/how-to-use-ionic-3-with-ms-visual-studio-community-2017
https://forum.ionicframework.com/t/ionic-4-google-maps-plugin/139786
https://github.com/ionic-team/ionic-starter-maps

ionic-team/ionic-native-google-maps
https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md
mapsplugin / cordova-plugin-googlemaps-doc
https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.3.0/README.md

Background Geolocation
https://ionicframework.com/docs/native/background-geolocation/

Adding Background Geolocation to an Ionic 2 & 3 Application
Adicionando Geolocalização em Segundo Plano a uma Aplicação Iônica 2 e 3
https://www.joshmorony.com/adding-background-geolocation-to-an-ionic-2-application/  ***muito bom***

Understanding Zones and Change Detection in Ionic 2 & Angular 2
Entendendo Zonas e Alterando Detecção em Ionic 2 e Angular 2
https://www.joshmorony.com/understanding-zones-and-change-detection-in-ionic-2-angular-2/


Google: google maps DirectionsService route
	https://developers.google.com/maps/documentation/javascript/distancematrix
	https://developers.google.com/maps/documentation/javascript/examples/distance-matrix

Google: ionic icone para o google maps marker
	ionic 2 dynamic markers in Google Maps with profile picture
	https://stackoverflow.com/questions/42598133/ionic-2-dynamic-markers-in-google-maps-with-profile-picture/42600327#42600327 (override google.maps.OverlayView)
		https://plnkr.co/edit/mkbkf2Eum2dXIAuKg7g1?p=preview
	https://stackoverflow.com/questions/5603623/how-can-i-show-label-title-for-marker-permanently-in-google-maps-v3 (dica para o label abaixo do ícone)
	https://github.com/Concept211/Google-Maps-Markers
	
Google: Google Maps MarkerImage
	Personalize uma imagem de marcador
	Convertendo MarkerImageobjetos para digitarIcon
	Faça um marcador arrastável
		https://developers.google.com/maps/documentation/javascript/markers

Customizing a Google Map: Custom Markers
	https://developers.google.com/maps/documentation/javascript/custom-markers
	Change individual markers in google maps directions (Alterar marcadores individuais nas direções do Google Maps)
		https://stackoverflow.com/questions/24936037/change-individual-markers-in-google-maps-directions

Google Maps JavaScript API V3 Reference
https://developers.google.com/maps/documentation/javascript/reference/
	DirectionsService class
	DirectionsRenderer class
	DirectionsRendererOptions interface
	DirectionsRequest interface
	DirectionsResult interface

Google Maps Code Samples
https://developers.google.com/maps/documentation/javascript/examples/

Diretório padrão dos ion-icon
	\node_modules\ionicons\dist\svg

Build a Desktop Application with Ionic 3 and Electron	https://robferguson.org/blog/2017/11/09/build-a-desktop-application-with-ionic-3-and-electron/

Ferramentas para imagens SVG https://inkscape.org/

FROM_UNIXTIME -> Returns a representation of the unix_timestamp argument as a value in 'YYYY-MM-DD HH:MM:SS'
https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_from-unixtime


IONIC 4
The Ionic 4 Images Guide (Capture, Store & Upload with POST)
https://devdactic.com/ionic-4-image-upload-storage/



Google: index.js:181 Uncaught TypeError: Object(...) is not a function Cordova
https://forum.ionicframework.com/t/ionic-4-beta-object-is-not-a-function/138152
https://forum.ionicframework.com/t/camera-in-ionic-v4/137740/7
https://forum.ionicframework.com/t/ionic-4-native-plugin-problem/136670/3

https://github.com/ionic-team/starters/tree/master/ionic-angular/official/super

Google: ionic-angular is not found ionic 4
https://moduscreate.com/blog/upgrading-an-ionic-3-application-to-ionic-4/
https://forum.ionicframework.com/t/problems-with-ionic-4-beta/139615
https://github.com/zyra/ionic-image-loader/issues/159
https://blog.ionicframework.com/help-test-ionic-native-5/

Google: ionic 4 Failed to execute 'createObjectURL' on 'URL': No function was found that matched the signature provided.
https://stackoverflow.com/questions/27120757/failed-to-execute-createobjecturl-on-url
https://github.com/ionic-team/ionic-native/issues/2868

Erro: Typescript Error Property 'share' does not exist on type 'Observable<Object>'
	Solução: import 'rxjs/add/operator/share'
				https://github.com/ohjames/rxjs-websockets/issues/16
				https://github.com/webmaxru/pwa-workshop-angular/issues/2
				https://medium.com/coding-snippets/rxjs-5-5-property-map-does-not-exist-on-type-observable-e825129c2068

Convert Your Base64 to Image
	https://codebeautify.org/base64-to-image-converter#
Save Base64 decoed image on file system
	https://stackoverflow.com/questions/27509969/save-base64-decoed-image-on-file-system
How to save a PNG image server-side, from a base64 data string
	https://stackoverflow.com/questions/11511511/how-to-save-a-png-image-server-side-from-a-base64-data-string

	
Ionic Storage Intro
https://www.youtube.com/watch?v=x0i8UMNEYsM&index=27&list=PLswa9HeoJUq_Dphg3w1TwqBMgruzRCwIO
Criando Nosso Auth Provider
https://www.youtube.com/watch?v=o2K9dSw2tP4&index=28&list=PLswa9HeoJUq_Dphg3w1TwqBMgruzRCwIO
Criando Page Login
https://www.youtube.com/watch?v=diP5gHOtJW8&list=PLswa9HeoJUq_Dphg3w1TwqBMgruzRCwIO&index=29
Processando Login
https://www.youtube.com/watch?v=IL3nimQHuB8&list=PLswa9HeoJUq_Dphg3w1TwqBMgruzRCwIO&index=30

Typescript Sleep
https://stackoverflow.com/questions/37764665/typescript-sleep
  setTimeout()

Angular2 wait for multiple promises to finish
https://stackoverflow.com/questions/37841721/angular2-wait-for-multiple-promises-to-finish
  Promise.all()




:: PENDÊNCIAS

- Usuário Capturar Atendimento
- Salvar localmente os dados do usuário para usar no login e requisição
- Refresh pra atualizar a listagem de atendimentos
- Notificação quando o tecnico for designado para um atendimento
- Alinhamento da Tab Pages Detalhes
- Ícones do app (bruno kalvner)
- Nomes da equipe na listagem de atendimentos
- Dados Adicionais - MTBF
- Dados Adicionais - Poder atualizar todos os contratos do cliente, não somente o contrato do atendimento.
- Verificar o funcionamento da tabela AtendimentoOS quando se cria a OS (Situação de 'Não Criada' para 'Na Fila' ou 'A Caminho' ou 'Concluída' ou 'Em Execução')

Ionic 3 Routing and Navigation Tutorial & Examples
https://www.techiediaries.com/ionic-2-navigation/

https://stackoverflow.com/questions/37296999/ionic-2-disabling-back-button-for-a-specific-view
https://forum.ionicframework.com/t/how-to-hide-tabs-when-pushing-a-new-page/56399
https://forum.ionicframework.com/t/how-to-hide-tabs-bar/95112
https://forum.ionicframework.com/t/ionic-hide-tabs/37998/26

ion-searchbar
https://github.com/ionic-team/ionic/issues/7539
https://pt.stackoverflow.com/questions/307544/alinhar-elementos-ion-navbar-ionic


ion-icon name="arrow-round-forward"
ion-icon name="arrow-round-down"
ion-icon name="arrow-down"
ion-icon name="download"
ion-icon name="photos"
ion-icon name="images"

Capturar na lista de atendimentos e na lista da pesquisa
Designar na lista de atendimentos e na lista da pesquisa quando o usuário for GESTOR


https://ionicframework.com/docs/v3/native/background-geolocation/
https://forum.ionicframework.com/t/background-geolocation-isnt-a-observable/154804/12

*** https://github.com/jossephalvarez/backgroundGeo/blob/master/package.json
    
    "@ionic-native/core": "~4.18.0",
    "cordova-plugin-geolocation": "^4.0.1",
    "@ionic-native/geolocation": "4.6.0",
    "cordova-plugin-mauron85-background-geolocation": "^2.3.6",
    "@ionic-native/background-geolocation": "^3.12.1",

*** https://github.com/jossephalvarez/ionic-background-LocalNotifications-ionic-3.9.2/blob/master/package.json
    "@ionic-native/background-mode": "^4.20.0",
    "cordova-plugin-background-mode": "0.7.2",

backgroundGeolocation.configure(...).subscribe is not a function
https://forum.ionicframework.com/t/background-geolocation-isnt-a-observable/154804/12

jossephalvarez/backgroundGeo
https://github.com/jossephalvarez/backgroundGeo/tree/master/src
https://github.com/jossephalvarez/ionic-background-LocalNotifications-ionic-3.9.2


jossephalvarez/ionic-background-LocalNotifications-ionic-3.9.2
https://github.com/jossephalvarez/ionic-background-LocalNotifications-ionic-3.9.2/blob/master/src/pages/background-geo/background-geo.ts

https://www.npmjs.com/package/cordova-plugin-mauron85-background-geolocation
https://www.npmjs.com/package/@ionic-native/background-geolocation
https://ionicframework.com/docs/v3/native/geolocation/

https://ionicframework.com/docs/v3/native/background-mode/
https://www.npmjs.com/package/cordova-plugin-background-mode
https://www.npmjs.com/package/@ionic-native/background-mode
https://www.schoolofnet.com/forum/topico/como-usar-o-plugin-cordova-plugin-background-mode-no-ionic-3-4217
https://github.com/argentinaluiz/ionic3-background-mode/blob/master/src/app/app.component.ts

https://ionicframework.com/docs/v3/native/local-notifications/
https://www.npmjs.com/package/cordova-plugin-local-notification
https://www.npmjs.com/package/@ionic-native/local-notifications


Google: ionic refresh data automatically in external database
https://forum.ionicframework.com/t/how-to-auto-update-data-on-ionic-page-with-out-refreshing-the-page/88843/3

OK -> MTBF
OK -> Tipo do Tecnico preencher corretamento quando não tiver no perfil
Pesquisa sem designação (limpar lista quando zerado)
Geolocalização
Dados Adicionais Obrigatório
Dados Adicionais Não salvou
publicar axestelecom


capturar
encerrar somente com os checklist marcados
permissão para discar
geolocalização
senha
