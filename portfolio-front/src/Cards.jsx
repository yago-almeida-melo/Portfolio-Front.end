import React from 'react';
import styled from 'styled-components';

const Card = ({img_path, title, description, link}) => {
  return (
    <StyledWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <div className="image_container">
            <img className="image" src={img_path} alt={title} />
          </div>
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-link {
    text-decoration: none;
    color: inherit;
  }

  .card {
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    padding: 1rem;
    width: 18rem;
    background-color: var(--bg-card);

    border-radius: 1rem;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;

    position: relative;
    z-index: 5;

    width: 100%;
    height: 14rem;
    background-color: var(--primary-800);

    border-radius: 0.5rem;
  }

  .image_container .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    overflow: clip;

    width: 100%;

    font-size: 1rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }

  .description {
    font-size: 0.875rem;
    color: var(--light);
    line-height: 1.4;
    min-height: 3rem;
  }

  .description p {
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }`;

export default Card;
