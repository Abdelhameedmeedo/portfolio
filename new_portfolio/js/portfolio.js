let navbar = document.querySelector('.portfolio .nav')
let service_websites = document.querySelector('.service .websites')
let service_designs = document.querySelector('.service .designs')
let service_channels = document.querySelector('.service .channels')
let service_items = document.querySelectorAll('.service .service_heading li')
let skills = document.querySelector('.portfolio .skills .skills_content')
let footer = document.querySelector('.footer .date')
let btn_up = document.querySelector('.btn')

//fixed document height 
let window_height = 655
//hide service sections
service_designs.style.display = 'none'
service_channels.style.display = 'none'


/// data ///
fetch('../js/db.json')
.then(resp => resp.json())
.then(data =>{
    let webs = data.webs
    let designs = data.designs

    //webs
    webs.forEach((item) => {
        let website_items = document.createElement('li')
            website_items.title = item['title']
        let websites_img = document.createElement('img')
            websites_img.src = item['img']
        //appending
        website_items.appendChild(websites_img)
        service_websites.appendChild(website_items)
    })
    //designs
    designs.forEach((item)=>{
        let design_item = document.createElement('li')
        let design_demo = document.createElement('a')
            design_demo.href = item['demo']
            design_demo.target = '_blank'
        let design_img = document.createElement('img')
            design_img.src = item['img']
        //appending
        design_item.appendChild(design_demo)
        design_demo.appendChild(design_img)
        service_designs.appendChild(design_item)
    })
    //flipping service sections
    service_items.forEach((el,index)=>{
        el.addEventListener('click',()=>{
            if(index == 0){
                service_designs.style.display = 'none'
                service_websites.style.display = 'none'
                service_channels.style.display = 'grid'
            }else if(index == 1){
                service_websites.style.display = 'none'
                service_channels.style.display = 'none'
                service_designs.style.display = 'grid'
            }else{
                service_designs.style.display = 'none'
                service_channels.style.display = 'none'
                service_websites.style.display = 'grid'
            }
        })
    })

    //  hover on item images(webs)
    let webs_imgs_hover = document.querySelectorAll('.websites li')
    for(let i = 0; i<webs_imgs_hover.length;i++){
        webs_imgs_hover[i].addEventListener('mouseenter',()=>{
            let img_div = document.createElement('div')
                img_div.className = 'img_hover'
            let img_code = document.createElement('a')
                img_code.className = 'code'
                img_code.href = webs[i]['code']
                img_code.target = '_blank'  
            let img_code_link = document.createElement('button')
                img_code_link.textContent = 'الكود'
            let img_demo = document.createElement('a')
                img_demo.className = 'demo'
                img_demo.href = webs[i]['demo']
                img_demo.target = '_blank'
            let img_demo_link = document.createElement('button')
                img_demo_link.textContent = 'عرض'
            //appending
            img_code.appendChild(img_code_link)
            img_demo.appendChild(img_demo_link)
            img_div.appendChild(img_code)
            img_div.appendChild(img_demo)
            webs_imgs_hover[i].appendChild(img_div)
        })
        // remove img_hover when leaveing hover
        webs_imgs_hover[i].addEventListener('mouseleave',()=>{
            document.querySelector('.img_hover').remove()
        })
    }

})

//  add background to navbar when scrolling
window.addEventListener('scroll',()=>{
    let scroll_position = window.scrollY + window.innerHeight
    if(scroll_position >= window_height){
        navbar.classList.add('nav_back')
    }else{
        navbar.classList.remove('nav_back')
    }
})
//  add/del color from service headings
service_items.forEach(el=>{
    el.addEventListener('click',()=>{
        service_items.forEach((el)=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    })
})
//about section

// skills section
let programing_skills = ['html','css','sass','bootstrap','javascript','vuejs','wordpress','python']
let programing_skills_values = ['90','90','90','80','85','65','50','35']
let skills_imgs = ['../imgs/skills/html.png','../imgs/skills/css1.jpeg','../imgs/skills/sass.png','../imgs/skills/Bootstrap1.jpeg','../imgs/skills/js.png','../imgs/skills/vue.png','../imgs/skills/WordPress.png','../imgs/skills/python1.jpeg']
    // manually progress
// for(let i = 0; i < programing_skills.length;i++){
//     let skill_li = document.createElement('li')
//     let skills_progress = document.createElement('span')
//         skills_progress.className = 'progress'
//         skills_progress.style.background = `conic-gradient(firebrick ${programing_skills_values[i] * 3.5}deg,white 0deg)`
//     let skills_progress_value = document.createElement('span')
//         skills_progress_value.className = 'progress_value'
//         skills_progress_value.textContent = `${programing_skills_values[i]}%`
//     let skills_texts = document.createElement('h4')
//         skills_texts.textContent = programing_skills[i]
//     //appending
//     skills_progress.appendChild(skills_progress_value)
//     skill_li.appendChild(skills_progress)
//     skill_li.appendChild(skills_texts)
//     skills.appendChild(skill_li)   
// }

// with progress library
for(let i = 0; i < programing_skills.length;i++){
    let skill_li = document.createElement('li')
    let skills_progress = document.createElement('span')
        skills_progress.className = 'progress ldBar'
        skills_progress.setAttribute('data-value',`${programing_skills_values[i]}`)
        skills_progress.setAttribute('data-preset','bubble')
    let skills_texts = document.createElement('h4')
        skills_texts.textContent = programing_skills[i]
    //appending
    skill_li.appendChild(skills_progress)
    skill_li.appendChild(skills_texts)
    skills.appendChild(skill_li)   
}
//footer
let year = new Date().getFullYear()
footer.textContent = `${year}`
//bottom up
window.addEventListener('scroll',()=>{
    let bottom_up = window.scrollY + window.innerHeight
    if(bottom_up > 1800){
       btn_up.style.display = 'flex'
       btn_up.addEventListener('click',()=>{
            document.body.scrollTop = 0 // safari
            document.documentElement.scrollTop = 0 //chrom , firefox , opera , ms edge
       })
    }else{
        btn_up.style.display = 'none'
    }
})