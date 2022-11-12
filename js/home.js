const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const switchLanguage = document.querySelector('#switch')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 60) {
		header.style.backgroundColor = '#0A0F26';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


 
const switchLan = () =>{

	const nav1 = document.querySelector('.nav-list ul li:nth-child(1) a')
	const nav2 = document.querySelector('.nav-list ul li:nth-child(2) a')
	const nav3 = document.querySelector('.nav-list ul li:nth-child(3) a')
	const nav4 = document.querySelector('.nav-list ul li:nth-child(4) a')

	const heroContent1 = document.querySelector('#hero h1:nth-child(1)')
	const heroContent2 = document.querySelector('#hero h1:nth-child(2)')
	const heroContent3 = document.querySelector('#hero h1:nth-child(3)')
	const heroContentBtn = document.querySelector('#hero a')
	const wel = document.querySelector('#hero h2')
	const animate = document.querySelector('#animate')

	const aboutContent1 = document.querySelector('#about .section-title')
	const aboutH2 = document.querySelector('#about h2')
	const aboutMainContent = document.querySelector('#about p')
	const aboutBtn = document.querySelector('#about a')
	
	const project = document.querySelector('#projectHeader')
	const projectSub1=document.querySelector('#subHeader1')
	const projectSub2=document.querySelector('#subHeader2')
	const projectBtn1 = document.querySelector('#projectBtn1')
	const projectBtn2 = document.querySelector('#projectBtn2')
	const projectBtn3 = document.querySelector('#projectBtn3')

	const ContactHeader=document.querySelector('#contactHeader');
	const phone =document.querySelector('#phone')
	const email =document.querySelector('#email')
	const location =document.querySelector('#location')

	const toZh = ()=>{
		nav1.textContent='主页'
		nav2.textContent='关于我'
		nav3.textContent='作品'
		nav4.textContent='联系方式'
		heroContent1.innerHTML='嗨，'
		heroContent2.textContent='我是'
		heroContent3.textContent='程乐章'
		heroContentBtn.textContent='作品集'
		wel.innerHTML='欢迎来到我的宇宙'
		animate.style.visibility = 'visible'

		aboutContent1.innerHTML='关于<span>我</span>'
		aboutH2.textContent='UI/UX设计师 & 前端开发者'
		aboutMainContent.textContent=`持有计算机与科学的学士学位,以及多伦多大学UI/UX训练营和编程训练营的证书;精通绝大多数的设计软件与前端开发语言例如Abode suite, Figma, HTML5, CSS, JavaScript, Bootstrap, jQuery, Node js 等... 我认为解决用户问题最重要的是理解用户的需求与障碍,从而能帮助他们获得更好的用户体验。我擅长设计与制作，美观与实用并存的用户界面。工作方面脚踏实地，积极进取，态度认真，敢于尝试与学习新鲜事物，渴望获得更多的成长机会！`
		aboutBtn.textContent='简历下载'

		project.innerHTML='近期<span>作品</span>'
		projectSub1.innerHTML='<span>UI/UX</span>作品'
		projectSub2.innerHTML='<span>编程</span>作品'
		projectBtn1.textContent='更多...'
		projectBtn2.textContent='更多...'
		projectBtn3.textContent='更多...'

		ContactHeader.innerHTML='联系<span>方式</span>'
		phone.innerHTML='<h1>电话</h1><h2>13488696656</h2>'
		email.innerHTML='<h1>电子邮箱</h1><h2>yuemoon45@hotmail.com</h2>'
		location.innerHTML='<h1>住址地区</h1><h2>北京</h2>'
	}

	const toEn = ()=>{
		nav1.textContent='Home'
		nav2.textContent='ABOUT ME'
		nav3.textContent='Projects'
		nav4.textContent='Contact me'
		heroContent1.textContent='Hi,'
		heroContent2.textContent='My Name is'
		heroContent3.textContent='Jasper'
		heroContentBtn.textContent='Portfolio'
		wel.innerHTML=`Welcome To My Universe`

		aboutContent1.innerHTML='about <span>me</span>'
		aboutH2.textContent='UI/UX Designer & Front End Developer'
		aboutMainContent.textContent=`with B.S. in computer science and a certificate from UofT SCS UX/UI Boot Camp. Skilled in most Adobe suite
		software, Figma, HTML5, CSS, JavaScript, Bootstrap, and jQuery. Strengthened in user problem solving and
		believed that understanding the needs and frustrations is the key to improving user experience. Specializing
		in creating beautiful and functional websites and digital interfaces, I am a very passionate designer who
		always wants to grow, learn, and explore something new.`
		aboutBtn.textContent='Download Resume'

		project.innerHTML='Recent <span>Projects</span>'
		projectSub1.innerHTML='<span>UI/UX</span> Projects'
		projectSub2.innerHTML='<span>Coding</span> Projects'
		projectBtn1.textContent='Read More'
		projectBtn2.textContent='Read More'
		projectBtn3.textContent='Read More'

		ContactHeader.innerHTML='Contact <span>info</span>'
		phone.innerHTML='<h1>Phone</h1><h2>+1(437)788-1280</h2>'
		email.innerHTML='<h1>Email</h1><h2>jaspercheng2022@gmail.com</h2>'
		location.innerHTML=`<h1>Location</h1><h2>Toronto,Canada</h2>`

	}
	


	if(nav1.textContent=='Home'){
		toZh();
	}
	else {
		toEn();	
	}




}

// function langugeToggle() {
	
// 	let lang = document.querySelector("#page").getAttribute("lang"); 
// 	if(lang == 'en'){

// 		lang.setAttribute("lang", 'zh'); 
// 	}else{
// 		lang.setAttribute("lang", "en"); 
// 	}
// }

switchLanguage.addEventListener('click',switchLan);