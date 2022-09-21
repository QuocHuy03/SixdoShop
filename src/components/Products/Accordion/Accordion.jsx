import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { huyit } from '../../QuocHuy';

const AccordionSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  top: 40%;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  transition: max-height 0.2s ease-out;
  height: 49px;
  cursor: pointer;
  gap: 40px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
const Dropdown = styled.div`
  width: 100%;
  align-items: center;
  height: 25px;
  text-transform: uppercase;
  color: #212121;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  display: flex;
  align-items: center;
  p {
    font-size: 13px;
    padding-left: 25px;
  }
`;

const SimpleAccordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ color: '#000', size: '15px' }}>
      <AccordionSection>
        <Container>
          {huyit.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <p>{item.question}</p>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default SimpleAccordion;