import React, { useState } from 'react';
import styled from 'styled-components';
import Medicine from './components/Medicine';

const medicines = [
  'ADHD',
  'Allergies',
  'Alzheimers',
  'Anxiety Disorders',
  'Arthritis',
  'Asthma',
  'Back Pain',
  'Cancer',
  'Cholesterol',
  'Cold, Flu, & Cough',
  'COPD',
  'Depression',
  'Diabetes',
  'Digestive Disorders',
  'Eye Health',
  'Heart Health',
  'Heartburn / GERD',
  'Hypertension',
  'Mental Health',
  'divya'
]

const App = () => {
  const [showMed, setShowMed] = useState(false)
  const [medData, setMedData] = useState([])

  const getMedDetails = () => {
    // fetch call to get the med details of the particular medicine
    // parse the data and get the necessary info (like id, title, description, image source and side effects)
    // setMedData(parsedData) -> medData (line no 30, will have the parsed Data)
    const parsedData = {
      'title': 'Mental Health',
      'description': 'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood. Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected.Many factors contribute to mental health problems.',
      'sideEffects': medicines,
      'imageSrc': 'https://www.rockethealth.shop/wp-content/uploads/2020/12/Fluoxetine-Caps-1.jpg'
    }
    setMedData(parsedData)

    setShowMed(!showMed)
  }

  return (
    <Wrapper>
      { //medicine home page
        !showMed && <HomePageWrapper getMedDetails={getMedDetails} />
      }
      {//medicine detail page
        showMed && <Medicine medData={medData} />
      }
    </Wrapper>
  );
}

const HomePageWrapper = ({ getMedDetails }) => {
  return (
    <Wrapper>
      <Title>
        Medicine encyclopedia
      </Title>
      <ul className='med-wrapper'>
        {//the data from backend is displayed in an iterative fashion
          medicines && medicines.map((medicine, index) => (
            <li key={index} className='med-list' onClick={getMedDetails} >
              {medicine}
            </li>
          ))
        }
      </ul>
    </Wrapper>
  )
}

export default App;

const Title = styled.h1`
  font-size: 1.75em;
  text-align: center;
  color: #000;
  font-family: serif;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;

  .med-wrapper {
    column-count: 4;
    --moz-column-count: 4;
    --webkit-column-count: 4;
    list-style: none;
  }

  .med-list {
    padding: 10px 10px;
    color: #4f4f4f;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    line-height: 22px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }
`;

