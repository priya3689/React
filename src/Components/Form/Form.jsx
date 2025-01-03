import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";
import reactforform from "./reactforform.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { formContext } from "../../context/FormDataContext";

function Form() {
  const { setFormData } = useContext(formContext);

  const { id } = useParams();

  console.log(id, "==my id");

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name length should be greater than 3"),
    email: yup
      .string()
      .required("Please provide a valid email")
      .email("Please provide a valid email"),
    country: yup
      .string()
      .oneOf(["India", "Qatar"], "Please Choose a Country")
      .required("Country is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  /* const [values,setValues] = useState({
    name:'',
    email:'',
    aboutu:'',
    contact:'',
    country:'',
    industry:'',
    favSub:''
    });
    
    const handleChanges = (e) => {
      setValues({...values, [e.target.name]:""+[e.target.value]+""});
      
    } */

  const handleFormValues = (data) => {
    setFormData(data);
    navigate("/user");
  };

  return (
    <div className="Form-wrapper">
      <h1>Enter your Details</h1>
      <img src={reactforform} alt="ReactLogo" />
      <form onSubmit={handleSubmit((data) => handleFormValues(data))}>
        <div className="name-email-container">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>
        <div className="aboutContact">
          <textarea
            cols="10"
            rows="3"
            name="aboutu"
            placeholder="About You"
            {...register("aboutu")}
          ></textarea>

          <div>
            <input
              type="tel"
              name="contact"
              placeholder="Contact No"
              {...register("contact")}
            />
          </div>
        </div>

        <div>
          <select name="country" placeholder="Country" {...register("country")}>
            <option value="">Select your Country</option>
            <option value="India">India</option>
            <option value="Qatar">Qatar</option>
          </select>
          {errors.country && <p className="error">{errors.country.message}</p>}
        </div>
        <div className="indSubWrapper">
          <div>
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              {...register("industry")}
            />
          </div>
          <div>
            <input
              type="text"
              name="favSub"
              placeholder="Prefered Subject"
              {...register("favSub")}
            />
          </div>
        </div>
        <input type="submit" name="Submit" value="Submit" />
      </form>
      <div className="cursor-pointer mt-10" onClick={() => navigate("/")}>
        {" "}
        &lt; Back to Home
      </div>
    </div>
  );
}

export default Form;
