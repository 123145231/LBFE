import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Home.css'; // Import the CSS module

function Home() {
  return (
    <Carousel className={`custom-carousel ${styles.customCarousel}`} data-bs-theme="dark">
      <Carousel.Item>
        <img
          className={styles.carouselImage} // Use className for the image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiv-n_hqquLS41q_thH2jWNW66N1b6UUaPjA&s"
          alt="Explore Our Collections"
        />
        <Carousel.Caption>
          <h5>Khám phá Bộ sưu tập của Chúng Tôi</h5>
          <p>Tham gia khám phá hàng ngàn tác phẩm từ các thời kỳ khác nhau.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carouselImage} // Use className for the image
          src="https://www.google.com/search?sca_esv=52e5a364f5a1b9dc&sxsrf=AHTn8zoJYdp7J3hjhYc3Qhl9IK5xYn_jEA:1740303835519&q=chos&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBpwxALD7bRaeOIZxqOFEngzB_O_LYSS4XXpaWwzVPCpGbEoTNp6A3iVxE6oOjTLUGiy65eqQn4zr4j5xKfK6hjRz-KdV8qFYZeobmtuj3xZt7_hdHweDze4MsAKOwlJLaoMDtNqdPmWxXsf04Zeax_1IHVW4&sa=X&ved=2ahUKEwjmg6v_wNmLAxUNslYBHTOYEkgQtKgLegQIEhAB&biw=1876&bih=920&dpr=1#vhid=yB-2wjsOgf3FLM&vssid=mosaic"
          alt="Digital Resources"
        />
        <Carousel.Caption>
          <h5>Tài nguyên Số</h5>
          <p>
            Truy cập vào một loạt tài nguyên số, bao gồm eBooks, tạp chí, và hơn
            thế nữa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carouselImage} // Use className for the image
          src="https://via.placeholder.com/800x400?text=Join+Events&bg=e5e5e5"
          alt="Join Events"
        />
        <Carousel.Caption>
          <h5>Tham gia Sự Kiện</h5>
          <p>
            Gia nhập cộng đồng của chúng tôi trong các sự kiện và hoạt động giáo
            dục.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
