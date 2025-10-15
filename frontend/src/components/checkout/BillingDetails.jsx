import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function BillingDetails() {
  const { state } = useContext(UserContext);
  console.log(state);

  // if (state.user) {
  //   return <div>user dey</div>;
  // } else
  return (
    <div className="flex-1 flex flex-col items-stretch  ">
      <div className=" text-sm  p-5 border-t-2 border-[#77b527] flex items-center gap-6 border-solid bg-neutral">
        <i className="bx bx-purchase-tag bx-rotate-90"></i>
        <button className=" ">
          {" "}
          Have a coupon? Click here to enter your code
        </button>
      </div>
      <div className=" mt-7 flex flex-col items-stretch  gap-y-8">
        <h2 className=" font-bold uppercase pb-[25px] border-b border-solid border-[#dfdfdf] mb-[25px]">
          Billing Details
        </h2>
        <form action="" className="flex flex-col gap-7">
          <div className=" flex gap-7">
            <div className="input-group">
              <label htmlFor="inpt-1">
                Fist Name <span className="compulsury">*</span>
              </label>
              <input id="inpt-1" required type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="inpt-2">
                Last Name <span className="compulsury">*</span>
              </label>
              <input id="inpt-2" required type="text" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="inpt-3">
              Country <span className="compulsury">*</span>
            </label>
            <input id="inpt-3" required type="text" />
          </div>

          <div className="input-group">
            <label htmlFor="inpt-4">
              Address <span className="compulsury">*</span>
            </label>
            <input
              id="inpt-4"
              placeholder="Street Address"
              required
              type="text"
            />
            <input
              placeholder="Appartment, suite, unite ect (optional)"
              type="text"
            />
          </div>
          <div className="input-group">
            <label htmlFor="inpt-5">
              Town/city <span className="compulsury">*</span>
            </label>
            <input id="inpt-5" required type="text" />
          </div>
          <div className="input-group">
            <label htmlFor="inpt-6">
              county/state <span className="compulsury">*</span>
            </label>
            <input id="inpt-6" required type="text" />
          </div>
          <div className="input-group">
            <label htmlFor="inpt-7">
              Postcode/ZIP <span className="compulsury">*</span>
            </label>
            <input id="inpt-7" required type="text" />
          </div>
          <div className="flex gap-7">
            <div className="input-group">
              <label htmlFor="inpt-8">
                Phone <span className="compulsury">*</span>
              </label>
              <input id="inpt-8" required type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="inpt-9">
                Email <span className="compulsury">*</span>
              </label>
              <input id="inpt-9" required type="text" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="inpt-10">
              Account Password <span className="compulsury">*</span>
            </label>
            <input id="inpt-10" required type="text" />
          </div>

          <div className=" flex gap-7">
            <div className="checkbox-wrapper-43">
              <input type="checkbox" id="cbx-43" />
              <label htmlFor="cbx-43" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
            </div>

            <label htmlFor="inpt-11">
              Note about your order, e.g, special noe for delivery
            </label>
          </div>

          <div className="input-group">
            <label htmlFor="inpt-12">
              Order notes <span className="compulsury">*</span>
            </label>
            <input
              id="inpt-12"
              placeholder="Notes about your order, e.g special notes for delivery"
              required
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BillingDetails;


{/* <div class="checkbox-wrapper-43">
  <input type="checkbox" id="cbx-43">
  <label for="cbx-43" class="check">
    <svg width="18px" height="18px" viewBox="0 0 18 18">
      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
      <polyline points="1 9 7 14 15 4"></polyline>
    </svg>
  </label>
</div> */}

// <style>
//   .checkbox-wrapper-43 input[type="checkbox"] {
//     display: none;
//     visibility: hidden;
//   }

//   .checkbox-wrapper-43 label {
//     display: inline-block;
//   }

//   .checkbox-wrapper-43 .check {
//     cursor: pointer;
//     position: relative;
//     margin: auto;
//     width: 18px;
//     height: 18px;
//     -webkit-tap-highlight-color: transparent;
//     transform: translate3d(0, 0, 0);
//   }
//   .checkbox-wrapper-43 .check:before {
//     content: "";
//     position: absolute;
//     top: -15px;
//     left: -15px;
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     background: rgba(34,50,84,0.03);
//     opacity: 0;
//     transition: opacity 0.2s ease;
//   }
//   .checkbox-wrapper-43 .check svg {
//     position: relative;
//     z-index: 1;
//     fill: none;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke: #c8ccd4;
//     stroke-width: 1.5;
//     transform: translate3d(0, 0, 0);
//     transition: all 0.2s ease;
//   }
//   .checkbox-wrapper-43 .check svg path {
//     stroke-dasharray: 60;
//     stroke-dashoffset: 0;
//   }
//   .checkbox-wrapper-43 .check svg polyline {
//     stroke-dasharray: 22;
//     stroke-dashoffset: 66;
//   }
//   .checkbox-wrapper-43 .check:hover:before {
//     opacity: 1;
//   }
//   .checkbox-wrapper-43 .check:hover svg {
//     stroke: #4285f4;
//   }
//   .checkbox-wrapper-43 input[type="checkbox"]:checked + .check svg {
//     stroke: #4285f4;
//   }
//   .checkbox-wrapper-43 input[type="checkbox"]:checked + .check svg path {
//     stroke-dashoffset: 60;
//     transition: all 0.3s linear;
//   }
//   .checkbox-wrapper-43 input[type="checkbox"]:checked + .check svg polyline {
//     stroke-dashoffset: 42;
//     transition: all 0.2s linear;
//     transition-delay: 0.15s;
//   }
// </style>
