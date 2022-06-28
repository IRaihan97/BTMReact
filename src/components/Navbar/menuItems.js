export const menuItems = [
    {
        title: "Home",
        scrollTo: "header-section"
    },
    ,
    {
        title: "Services",
        scrollTo: "services-section",
        submenu: [
            {
                title: "Data And AI",
                scrollTo: "data-section"
            },
            {
                title:"Software Development",
                scrollTo:"software-section"
            },
            {
                title: "UX And UI",
                scrollTo: "ux-section"
            },
            {
                title: "Proof Of Concepts",
                scrollTo: "poc-section"
            },
            {
                title: "Applied R&D",
                scrollTo: "randd-section"
            },
        ]
    },
    {
        title: "Our Talents",
        scrollTo: "experts-section",
        submenu: [
            {
                title: "Experts",
                scrollTo: "experts-section"
            },
            {
                title:"Students",
                scrollTo:"students-section"
            }
        ]
    },
    {
        title: "About Us",
        scrollTo: "about-section",
        submenu: [
            {
                title: "Our Mission and Vision",
                scrollTo: "about-section"
            },
            {
                title: "Testimonials",
                scrollTo: "testimonial-section"
            },
        ]
    },
    {
        title: "Contact Us",
        scrollTo: "contact-section"
    }
]