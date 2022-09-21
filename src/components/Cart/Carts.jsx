import './style.css';

const Carts = () => {
  const huycode = {
    color: '#C73536',
  }
  return (
    <section className='cart_order'>
      <div className="c-box_total--cart">
        <h2 className="c-title_module">
          Đơn hàng của bạn</h2>
        <div className="cal list_order">
          <div className="item c-head">
            <p>
              Sản phẩm</p>
            <p>
              Tổng tiền</p>
          </div>
          <div className="c-box_item key_item--1 item">
            <p className="c-item_name">
              1 x
              <a href="https://sixdo.vn/black-wide-leg-raw-dresspants-pd4019" title="Black Wide Leg Raw Dresspants" className="c-name">
                Black Wide Leg Raw Dresspants - Đen - L </a>
            </p>
            <p className="c-price">
              1.196.000đ </p>
          </div>
        </div>
        <div className="total-order">
          <p className="c-price_discount">
            Giảm giá
            <span className=" pull-right">
              <strong>
                - </strong>
            </span>
          </p>
          <input type="hidden" name="service_ship" id="service_ship" defaultValue />
          <p className="c-fee_ship">
            Phí vận chuyển<span id="text_fee_ship" className="c-value  pull-right" data-fee={25000}>
              25.000đ</span>
            <br />
          </p><div className="c-total_order">
            Tổng thanh toán
            <input type="hidden" id="total_order" name="total_order" defaultValue={1196000} />
            <span id="text_total_order" className="order-value pull-right">
              1.221.000đ </span>
          </div>
        </div>
        <div className="c-box_redirect">
          <a className="c-btn c-redirect" title="Thanh toán" href='@@' >
            Thanh toán</a>
          <a className="c-btn c-shopping" title="Tiếp tục mua sắm" href="/products">
            Tiếp tục mua sắm </a>
        </div>
        <div className="guide-bottom">
          <a href="tel:1800 6650">
            <span><img src="https://sixdo.vn/images/ic-phone.svg" alt="hotline" className="img-responsive" /></span>
            Hotline 1800 6650</a>
          <a href="@@">
            <span><img src="https://sixdo.vn/images/information.svg" alt="guide-buy" className="img-responsive" /></span>
            Hướng dẫn mua hàng
          </a>
        </div>
      </div>
      <div class="c-note_bot">
        Khi ấn "Đặt hàng" nghĩa là bạn đã đồng ý với <br />
        <a href="@@" title="Điều khoản &amp; Chính sách">
          Điều khoản &amp; Chính sách</a>
        giao dịch của SIXDO.
      </div>
      <div class="alert_config c-note_bot">
        <p style={huycode}>Vì ảnh hưởng của COVID-19, thời gian giao hàng dự kiến sẽ kéo dài từ 7 - 12 ngày. Với các khu vực phong toả, SIXDO sẽ giao hàng ngay khi thông báo phong toả được gỡ. SIXDO sẽ liên lạc với quý khách để xác nhận đơn và thông báo cụ thể. Rất mong quý khách hàng thông cảm!</p>
      </div>
    </section>

  );
}

export default Carts;