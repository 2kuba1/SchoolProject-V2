import ExpandMoreImg from '../../../assets/Expand_more.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ExpandMoreButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.img
      src={ExpandMoreImg}
      alt='Expand more'
      animate={{ rotate: isExpanded ? -180 : 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
      onClick={() => setIsExpanded(!isExpanded)}
    />
  );
};

export default ExpandMoreButton;
