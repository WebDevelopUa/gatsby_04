import React from "react"
import Background from "./Background"
import styled from "styled-components"
import { Link } from "gatsby"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Hero = ({ projects }) => {
  const imagesAirtable = projects.map(item => {
    const {
      data: {
        image: { localFiles },
      },
    } = item

    return localFiles[0].childImageSharp.gatsbyImageData.images.fallback
  })

  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const lastIndex = imagesAirtable.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, imagesAirtable])

  return (
    <Wrapper>
      <Background image={imagesAirtable[index]}>
        <article>
          <h3>Hero component text</h3>
          <h1>Hi there!</h1>
          <Link to={`/projects`}>Projects</Link>
        </article>
        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
        <div className="dots">
          {imagesAirtable.map((_, btnIndex) => (
            <span
              aria-hidden="true"
              key={btnIndex}
              onClick={() => setIndex(btnIndex)}
              className={index === btnIndex ? `active` : undefined}
            />
          ))}
        </div>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;

    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }

    h3 {
      font-weight: 400;
      font-family: "Caveat", cursive;
    }

    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }

    a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }

    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }

      h1 {
        letter-spacing: 5px;
      }
    }
  }

  .next-btn,
  .prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    background: transparent;
    color: var(--clr-white);
    border: transparent;
    cursor: pointer;
    transition: var(--transition);
    @media (min-width: 800px) {
      & {
        font-size: 4.5rem;
      }
    }
  }

  .next-btn:hover,
  .prev-btn:hover {
    color: var(--clr-primary-5);
  }

  .prev-btn {
    left: 0;
  }

  .next-btn {
    right: 0;
  }

  @media (min-width: 1000px) {
    .prev-btn {
      left: 3rem;
    }

    .next-btn {
      right: 3rem;
    }
  }

  .dots {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;

    span {
      display: block;
      cursor: pointer;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 50%;
      background: var(--clr-white);
      margin: 0 1rem;
      border: 2px solid var(--clr-white);
      @media (min-width: 800px) {
        & {
          height: 1rem;
          width: 1rem;
        }
      }
    }

    span.active {
      background-color: transparent;
    }
  }
`

export default Hero
