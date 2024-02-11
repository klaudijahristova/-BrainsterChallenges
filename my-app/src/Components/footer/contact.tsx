import React from 'react';
type Props = {
  title: string;
  array: string[];
}

const Contact: React.FC<Props> = ({ title, array }) => {
    
  return (
    <div className="col-3 border-start">
      <h5>{title}</h5>
      <ul className="list-unstyled">
        {array.map((item, index) => (
          <a href="#" className="text-decoration-none text-black" key={index}>
            <li className="hover">{item}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Contact;

