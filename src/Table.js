import Reacr from "react";
import "./table.css";
export default function Table() {
  return (
    <>
      <>
        <div className="table-container">
          <div className="title-wrapper d-flex">
            <div className="title-text">Text</div>
            <div className="wrapper-btn">
              <button className="title-btn">text</button>
              <button className="title-btn">text</button>
              <button className="title-btn">text</button>
              <button className="title-btn">text</button>
            </div>
          </div>
          <div className="ac-wrapper">
            <div className="ac-name">
              <h6>
                Ac Name : <span className="text-primary">ABC</span>
              </h6>
              <h6>Ac Number : 4031</h6>
            </div>
            <div className="date-wrapper">
              <div className="p-2 bd-highlight">
                From Date: <input type="date" /> &nbsp;&nbsp;&nbsp;ToDate:{" "}
                <input type="date" />
              </div>
            </div>
          </div>

          <table className="table secondary mt-3">
        
            <thead>
              <tr>
                <th scope="col">text</th>
                <th scope="col">text</th>
                <th scope="col">text</th>
                <th scope="col">text</th>
                <th scope="col">text</th>
                <th scope="col">text</th>
                <th scope="col">text</th>
                <th scope="col">text</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
              </tr>
              <tr>
              <th scope="row"></th>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
              </tr>
              <tr>
              <th scope="row"></th>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                </tr>
              <tr>
              <th scope="row"></th>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
              </tr>
              <tr>
              <th scope="row">123</th>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
          <div className="total-wrapper">
             
              <div className="total">300.00</div>
              <div className="total">45.50.000 </div>
              <div className="total">TOTAL</div>
              <div className="total">1520.60</div>
              <div className="total">12.38.000</div>
              
          </div>
        </div>
      </>
    </>
  );
}
