import React from "react";
import style from "../SingleCard/SingleCard.module.scss";
import share from "../../assets/imgs/share.svg";
import qarse from "../../assets/imgs/qarse.svg";
const SingleCard = () => {
  return (
    <div className={style.container}>
      <div className={style.wrappCard}>
        <div className={style.CardLeft}>
          <button className={style.cardLeftBtn}>
            <img src={share} alt="img" />
            125
          </button>
          <button>
            <img src={qarse} alt="img" />
            70
          </button>
        </div>
        <div className={style.CardRight}>
          <span className={style.cardRight__span}>User interface</span>
          <div className={style.cardRight__title__wrapp}>
            <h2 className={style.cardRight__title}>
              Bad Design vs. Good Design: 5 Examples We can Learn From
            </h2>
          </div>
          <div className={style.wrapsans}>
            <span className={style.cardRight__span1}>
              October 24, 2020 3 minutes read
            </span>
          </div>
          <img src={share} alt="" className={style.cardRight__img} />
          <div className={style.wrapRight__Text}>
            <p className={style.right__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis sed totam in, magnam repellendus, quasi error, unde
              ipsam dignissimos sint cum tempore. Cumque illo, vero animi minima
              vel temporibus sapiente nam tempora iure qui unde voluptatum
              praesentium ex exercitationem aperiam pariatur voluptatem totam
              omnis quod maxime, perferendis esse possimus iste! Natus nemo
              delectus facilis. Doloremque possimus ducimus libero dolores minus
              necessitatibus a ex, ut reprehenderit rem dolorum repellat saepe
              nihil temporibus! Iusto doloremque molestiae repellendus maiores
              placeat! Cum voluptatum nostrum iure impedit dolor saepe modi ad
              beatae quidem eligendi ullam, commodi fuga eum aspernatur iusto
              repudiandae aut odit debitis nisi vitae consectetur hic nemo. Esse
              distinctio in dolor nobis consectetur modi eveniet nostrum
              incidunt maxime, ullam possimus, rem quia? Molestiae cum odit
              iusto laborum facilis saepe sapiente architecto eos a repudiandae,
              quas explicabo perspiciatis quisquam sit laudantium recusandae
              doloribus fugiat accusamus ipsa quo nam. Odio distinctio ipsum
              similique veniam fugiat atque deleniti, quidem magni quos
              voluptatem, eaque quod aliquam incidunt quasi veritatis sit cumque
              consectetur esse dolor repudiandae ex! At ducimus tempora
              consequatur corrupti incidunt ipsam eius, corporis quam laborum
              ut, est iure reiciendis! Repudiandae nostrum, eos, illum officia,
              ratione a explicabo voluptas molestias necessitatibus ducimus quis
              distinctio asperiores reprehenderit!
            </p>
          </div>
          <h3 className={style.wrapRight__title}>More like this</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
