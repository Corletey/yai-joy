import React from 'react';
import { motion } from 'framer-motion';
import cocoImg from '../../../assets/cocotree.jpeg';
import coco1Img from '../../../assets/cocowater1.jpeg';

const Services = () => {
  return (
    <section id="products" className="bg-neutral py-8 md:py-16">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Service 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1"
          >
            <img
              src={cocoImg}
              alt="Coconut Sourcing"
              className="w-full h-auto object-cover rounded-lg border-4 border-success"
            />
          </motion.div>
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Sustainable Sourcing</h2>
            <p className="text-secondary mb-6">
              At Joya Foods, we believe in sustainability from the ground up. Our coconuts are ethically sourced to preserve the environment and support local farmers, ensuring quality you can trust.
            </p>
          </motion.div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-6">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1"
          >
            <img
              src={coco1Img}
              alt="Coconut Processing"
              className="w-full h-auto object-cover rounded-lg border-4 border-success"
            />
          </motion.div>
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Eco-Friendly Processing</h2>
            <p className="text-secondary mb-6">
              Our eco-friendly processing methods retain the natural integrity of coconuts while minimizing waste. Joya Foods is committed to delivering products that are good for you and the planet.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
