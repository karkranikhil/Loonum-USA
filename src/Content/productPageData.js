import ImageList from './imagesData'

const { HERO_IMAGE, DIGITAL_LOGO, CONTENT_LOGO, INVENTORY_LOGO, ECORMMERCE_WORKING_IMG, Inventory_fill, Inventory_outline, CMS_fill, CMS_outline, Small_business_fill, Small_business_outlilne, Website_fill, Website_outline, ECOMMERCE_LOGO, ESERVICES_LOGO, ASSET_MANAGEMENT_LOGO, COMM_SOCIAL_MEDIA_LOGO, CUSTOMISED_RESPONSIVE_LOGO, PERFORMANCE_LOGO, SUPPLIER_MANAGEMENT, PRODUCT_MANINTAINANCE, STOCK_ENTRY } = ImageList.PRODUCT_PAGE_IMAGES
export default {
    HERO_DATA: {
        HERO_HEADING: 'A PRODUCT SET CREATED FOR SMALL BUSINESSES',
        HERO_SUBHEADING: "Loonum offers an end-to-end visionary approach to product  design, development and implementation. Our focus is to discover and define problems, then create solutions to repair issues and exploit opportunities. Under our guidance, your customers will know and understand your brand better than ever before.",
        HERO_IMAGE: HERO_IMAGE
    },
    TAB_LIST: [
        {
            label: 'SMALL BUSINESS',
            mobileLabel: 'SMALL BUSINESS',
            image: Small_business_outlilne,
            image_active: Small_business_fill,
            Description: 'Our 3 Pillar Framework, is designed to help drive continued success and to find increased value from your website, content management system (CMS), and inventory systems. This strategy is perfect for increasing growth and brand awareness.',
            CARDS: [
                {
                    logo: DIGITAL_LOGO,
                    name: 'Digital Representation',
                    text: "A user-centric designed website is key for digital representation. It’s where customers get to know your brand, and learn what you can do for them. It’s your chance to showcase what you can do."
                },
                {
                    logo: CONTENT_LOGO,
                    name: 'Content Management',
                    text: "Having a purpose built CMS is perfect for small businesses as it has everything you need and nothing you don't. You wont need to learn anything as Loonum can seamlessly integrate our CMS into your current processes."
                },
                {
                    logo: INVENTORY_LOGO,
                    name: 'Inventory Management',
                    text: "Loonum has developed an inventory system that keeps track of stock levels, sales and cost values. It has been designed specifically to support the needs of small business enterprises."
                }
            ]
        },
        {
            label: 'WEBSITES',
            mobileLabel: 'WEBSITES',
            image: Website_outline,
            image_active: Website_fill,
            Description: 'We build websites for e-commerce (suitable for retail, wholesale, and services) and branding. The design process starts from user experience (UX) and then develops the relationship between seller and consumer. Our unique approach will put you in front of your competitors.',
            CARDS: [
                {
                    logo: CUSTOMISED_RESPONSIVE_LOGO,
                    name: 'Customised & Responsive',
                    text: "A modern website needs to be adaptable, as it can be viewed on an increasing amount of different displays and operating systems (OS). Loonum plans and designs websites to suit all your customers devices."
                },
                {
                    logo: ECOMMERCE_LOGO,
                    name: 'E-commerce',
                    text: "With a customizable e-commerce website you can sustain and build on your successes. Loonum develops websites that are easily upgradable, we consistently prepare you for the next step in your evolution."
                },
                {
                    logo: ESERVICES_LOGO,
                    name: 'E-services',
                    text: "We design and build websites for businesses that sell services over physical objects. Our functionality websites can include, booking systems, subscription services, or monthly-fee driven communication based content."
                }
            ]
        },
        {
            label: 'CMS DASHBOARD',
            mobileLabel: 'CMS',
            image: CMS_outline,
            image_active: CMS_fill,
            Description: 'After many discussions with small business operators, one thing stood out among the others, and that was that they needed more time to grow and develop the business. Loonum has designed a CMS dashboard that is simple, user-friendly, efficient and productive.',
            CARDS: [
                {
                    logo: ASSET_MANAGEMENT_LOGO,
                    name: 'Asset Management',
                    text: "With our CMS you’ll be able to see everything at a glance. You can check on high performers, examine stock levels, and see annual revenue. It can show you what you need to do to create scalable growth."
                },
                {
                    logo: COMM_SOCIAL_MEDIA_LOGO,
                    name: 'Communications',
                    text: "Incorporating automated systems to plan customer communications over multiple channels can free up time. Loonum has created the tools to simplify your business updates over social media."
                },
                {
                    logo: PERFORMANCE_LOGO,
                    name: 'Analytics Services',
                    text: "The Loonum CMS can produce reports, so you’ll always be kept in the loop for how everything is progressing. Reports can be generated at any time, but usually having a dedicated timeframe is easier for reflection and planning."
                }
            ]
        }, {
            label: 'INVENORY MANAGEMENT',
            mobileLabel: 'INVENTORY',
            image: Inventory_outline,
            image_active: Inventory_fill,
            Description: 'Having the right tools at hand to track your inventory is key to success. You need to know when things are arriving and how far they are away. With Loonum’s inventory management software this information will be at the ends of your fingertips!',
            CARDS: [
                {
                    logo: STOCK_ENTRY,
                    name: 'Stock Entry',
                    text: "Loonum inventory systems have been created with large volumes of data in mind. Our digital systems will speed up entering stock into your system, it will make importing stock data fast and accurate!"
                },
                {
                    logo: PRODUCT_MANINTAINANCE,
                    name: 'Stock Maintenance',
                    text: "With Loonum you’ll be able to see your stock levels at a glance, including how your sales are tracking. Our systems make altering stock easy, so maintenance tasks are a breeze to complete. "
                },
                {
                    logo: SUPPLIER_MANAGEMENT,
                    name: 'Supplier Management',
                    text: "Having a streamlined system in place means that your supplier order goes out on time everytime; you’ll never miss an ordering window again with the Loonum inventory management system."
                }
            ]
        }],
    NEW_WAY_WORKING_DATA: {
        heading: 'A WEBSITE IS THE BEATING HEART OF ANY ENTERPRISE',
        image: ECORMMERCE_WORKING_IMG,
        description: "With the ever-changing world of digital, the current climate has given opportunities to reimagine the way we engage with our customers and how we operate as a business. At Loonum, we approach with empathy and speed to action, which fast track your digital representation come to life so your customers can continue to engage with your business."
    }
}