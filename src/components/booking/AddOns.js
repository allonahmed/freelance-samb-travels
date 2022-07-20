import React, { useState } from "react";
import {
  monument,
  safari,
  goree,
  chefteaches,
  atvride,
  personalchef
} from "../../images/images";

import { useSelector, useDispatch } from "react-redux";
import { updateATVCount, updateAddOns } from "../../redux/reducers";
import { Check, Add, Close } from "@mui/icons-material";

const AddOns = ({ active }) => {
  const [chefCount, setChefCount] = useState(0);
  const [imageHover, setImageHover] = useState(0);
  const data = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();

  const options = [
    data.personalChef,
    data.atvRide,
    data.goree,
    data.lessons,
    data.safari,
    data.renaissance
  ];

  return (
    <div
      className="form add-on-form"
      style={active === 2 ? { display: "flex" } : { display: "none" }}
    >
      <div className="add-on-header form-header">Get Additional Add Ons</div>

      {addOnsData.map((add, id) => {
        return (
          <div className="sub-container" key={id}>
            <img className="add-on-image" src={add.img} alt="kitchen add on" />
            <div className="add-on-small">
              <img src={add.img} />
              <div
                className="image-filter"
                style={
                  options[id]
                    ? { transform: "translateX(-150px)" }
                    : { transform: "translateY(0)" }
                }
              ></div>
              <div
                className="add-on-checked"
                style={
                  !options[id]
                    ? { transform: "translateX(150px)" }
                    : { transform: "translateY(0)" }
                }
                onMouseEnter={() => setImageHover(true)}
              >
                <h2>Added</h2>
              </div>
              <div
                className="add-on-small-add"
                style={
                  !options[id]
                    ? {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                      }
                    : {
                        top: "5px",
                        left: "unset",
                        right: "5px",
                        transform: "translate(0,0)"
                      }
                }
              >
                {!options[id] ? (
                  <Add
                    className="add-on-add-button"
                    onClick={() => dispatch(updateAddOns(id))}
                  />
                ) : (
                  <Close
                    className="add-on-add-exit"
                    onClick={() => dispatch(updateAddOns(id))}
                  />
                )}
              </div>
            </div>
            <div className="add-on-details">
              <div className="add-on-description">
                <div className="add-on-title">{add.title}</div>
                <div className="add-on-summary">{add.description}</div>
              </div>
              <div className="add-on-payment">{add.payment}</div>
            </div>
            <div className="add-on-add">
              {!options[id] ? (
                <Add
                  className="add-on-add-button"
                  onClick={() => dispatch(updateAddOns(id))}
                />
              ) : (
                <Check
                  className="add-on-add-button"
                  onClick={() => dispatch(updateAddOns(id))}
                />
              )}

              <div>ADD</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const addOnsData = [
  {
    title: "Personal Chef",
    img: personalchef,
    description:
      "Never worry about food or cooking when you stay with us. We offer a personal chef who provides breakfast and dinner for the duration of the stay!",
    payment: "$40/Day (per guest)"
  },
  {
    title: "ATV Ride",
    img: atvride,
    description:
      "Ride an ATV along the shore of the nearby beaches and along the ATV course. You can enjoy the incredible views here at Dakar, while enjoying a ride on our ATVs.",
    payment: "$40/Person"
  },
  {
    title: "Tour of Gorée Island",
    img: goree,
    description:
      "Visit Gorée Island, a tiny island island off the coast of Dakar. It is known for it's role in the 15-19th century Atlantic slave trade. You can visit and learn more about it's rich history.",
    payment: "$30/Person"
  },
  {
    title: "Senegalese Cooking Lessons",
    img: chefteaches,
    description:
      "Learn native cuisines and recipes, taught by our chef in the comfort of our humble abode. You will go home ready to make new delicious, Senegalese dishes.",
    payment: "$50/Session"
  },
  {
    title: "Fathala Wildlife Reserve",
    img: safari,
    description:
      "Ever wanted to walk with lions? Well, you can at the Fathala Wildlife Reserve. You can get a tour through the safari, walk with native animals, and even enjoy the nearby hotel anemities!",
    payment: "$120/Person"
  },
  {
    title: "Monument of the Renaissance",
    img: monument,
    description:
      "Personal tour to the largest monument in Africa, the African Renaissance Monument, which symbolizes the rebirth of Africa. Learn more about the 49 meter bronze statue's history.",
    payment: "$20/Person"
  }
];
export default AddOns;
