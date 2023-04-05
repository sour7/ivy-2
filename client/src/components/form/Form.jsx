import React from "react";
import "./form.css";
const Form = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="from-desc">
          <h2>Find your Perfect Course</h2>
          <p>
            Still confused which course suits you best try our AI tools to give
            you the best suggestion that helps to choose a course wisely.
          </p>
        </div>
        <div className="form-box">
          <div className="form-input">
            <div className="form-left">
              <div className="form-number">1</div>
              <div className="form-input-text">
                <label htmlFor="education">
                  What is your Educational qualification*
                </label>
                <select
                  type="text"
                  id="education"
                  style={{ padding: "2px", color: "gray" }}
                >
                  <option value="level">level</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div className="form-left">
              <div className="form-number">2</div>
              <div className="form-input-text">
                <label htmlFor="education">
                  What is your Educational qualification*
                </label>
                <select
                  type="text"
                  id="education"
                  style={{ padding: "2px", color: "gray" }}
                >
                  <option value="level">level</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div className="form-left">
              <div className="form-number">3</div>
              <div className="form-input-text">
                <label htmlFor="education">
                  What is your Educational qualification*
                </label>
                <select
                  type="text"
                  id="education"
                  style={{ padding: "2px", color: "gray" }}
                >
                  <option value="level">level</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div className="form-left">
              <div className="form-number">4</div>
              <div className="form-input-text">
                <label htmlFor="education">
                  What is your Educational qualification*
                </label>
                <select
                  type="text"
                  id="education"
                  style={{ padding: "2px", color: "gray" }}
                >
                  <option value="level">level</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div className="form-left">
              <div className="form-number">5</div>
              <div className="form-input-text">
                <label htmlFor="education">
                  What is your Educational qualification*
                </label>
                <select
                  type="text"
                  id="education"
                  style={{ padding: "2px", color: "gray" }}
                >
                  <option value="level">level</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="form-find">
              <button className="from-btn">Find My Perfect Course</button>
            </div>
          </div>
          <div className="form-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReIYzKCfweEn6SnwyLSat5EZMlOlQ6SEdeUQ&usqp=CAU"
              alt=""
              className="from-img"
            />
            <div>
              <input
                type="text"
                placeholder="Ivy Pro School..."
                className="form-img-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
