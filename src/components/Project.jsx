import React, { useRef, useEffect } from "react";
import PageItem from "./PageItem";
import "./Project2.scss";
import { data } from "./data";

const Project = () => {
  const GroupRef = useRef([]);
  const mainRef = useRef([]);

  const onScroll = (el) => {
    const temp = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect(); // returns top, bottom, left, right and other properties of the div

        return { group, rect };
      })

    // Return the first object/div which has the bottom >= innerheight / 2
    const styles = temp.find((group) => (
      group.rect.bottom >= window.innerHeight * 0.5
      // group.rect.top >= 0
    ));

    document.body.style.backgroundColor = `${styles.group.dataset.mybgcolor}`;
  };

  const nextPage = () => {
    const temp = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect(); // returns top, bottom, left, right and other properties of the div

        return { group, rect };
      })

    // Return the first object/div which has the bottom >= innerheight / 2
    const styles = temp.find((group) => (
      group.rect.bottom > window.innerHeight
    ));

    styles.group.scrollIntoView({ behavior: 'smooth' });
  }

  const prevPage = () => {
    const temp = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect(); // returns top, bottom, left, right and other properties of the div

        return { group, rect };
      })

    // Return the first object/div which has the bottom >= innerheight / 2
    const styles = temp.find((group) => (
      group.rect.top >= -1 * window.innerHeight
    ));

    styles.group.scrollIntoView({ behavior: 'smooth' });
  }

  const topPage = () => {
    const temp = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect(); // returns top, bottom, left, right and other properties of the div

        return { group, rect };
      })

    // Return the first object/div which has the bottom >= innerheight / 2
    const styles = temp.find((group) => (
      group.rect.top <= 0
    ));

    styles.group.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    // mainRef.current.scroll(290, 300);
    mainRef.current.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={mainRef} className="app__project2__container">
        {data.map((group, i) => {
          return (
            <div
              ref={(el) => (GroupRef.current[i] = el)}
              style={{ height: "100vh" }}
              data-mybgcolor={group.backGround}
            >
              <PageItem
                img={group.img}
                nextPage={nextPage}
                prevPage={prevPage}
                topPage={topPage}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
