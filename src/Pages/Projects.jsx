import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const services = [
    {
        title: "E-commerce",
        images: [
            "src/images/793aa9391928a9cdade7be11d056d529.jpg",
            "/images/ecommerce2.jpg",
            "/images/ecommerce3.jpg",
        ],
        description: "Build modern e-commerce platforms with seamless user experience.",
    },
    {
        title: "Delivery Services",
        images: [
            "/images/delivery1.jpg",
            "/images/delivery2.jpg",
            "/images/delivery3.jpg",
        ],
        description: "Efficient delivery services for digital tools, fashion, and construction.",
    },
    {
        title: "Freelancing & Software Development",
        images: [
            "/images/freelance1.jpg",
            "/images/freelance2.jpg",
            "/images/freelance3.jpg",
        ],
        description: "Innovative software solutions and web development fixes.",
    },
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
            <div className="w-11/12 mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ service }) {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % service.images.length);
    };

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
    };

    return (
        <div>

        <Card className="w-11/12  mx-auto  shadow-lg rounded-2xl" hoverable>
            <h2 className="text-xl font-semibold mb-4 text-center">{service.title}</h2>
            <div className="relative w-full h-48">
                <motion.img
                    key={service.images[index]}
                    src={service.images[index]}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <Button
                    shape="circle"
                    icon={<LeftOutlined />}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2"
                    onClick={prevImage}
                />
                <Button
                    shape="circle"
                    icon={<RightOutlined />}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    onClick={nextImage}
                />
            </div>
            <p className="text-sm text-gray-600 my-4 text-center">{service.description}</p>
            <Button type="primary" className="w-full">Contact Us</Button>
        </Card>
        </div>

    );
}
