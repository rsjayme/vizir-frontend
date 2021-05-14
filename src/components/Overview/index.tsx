import { Container } from './styles';

export default function Overview() {
  return (
    <Container>
      <div className="content">
        <div className="left-content">
          <h1>Vantanges do FaleMais</h1>
        </div>
        <div className="right-content">
          <div className="advantages">
            <div className="advantage-left">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="advantage-right">
              <img src="assets/devices.png" alt="" />
            </div>
          </div>

          <div className="divisory"></div>

          <div className="advantages">
            <div className="advantage-left">
              <h1>Duis aute irure dolor in reprehenderit</h1>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="advantage-right">
              <img src="assets/BigIcon.svg" alt="" />
              <div className="price-box">
                <h1>
                  00,
                  <span>
                    00<span>/mês</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="divisory"></div>

          <div className="advantages">
            <div className="advantage-left">
              <h1>Excepteur sint occa ecat cupidatat </h1>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="advantage-right">
              <table>
                <thead>
                  <tr>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>$/min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>011</td>
                    <td>016</td>
                    <td>1.90</td>
                  </tr>

                  <tr>
                    <td>011</td>
                    <td>017</td>
                    <td>1.70</td>
                  </tr>

                  <tr>
                    <td>017</td>
                    <td>011</td>
                    <td>2.70</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
