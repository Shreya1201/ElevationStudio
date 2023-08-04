import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import axios from "axios";

const Forms = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 7rem;
`;

const Contact = styled.div`
  background-color: #f4f4f4;
  padding-left: 2rem;
  border-radius: 15px;
  display: flex;
`;

const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 3rem;
  border-radius: 15px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;

  padding: 16px;
  font-weight: bold;
  display: flex;
  p {
    font-weight: italic;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledInputArea = styled.div`
  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const StyledLabel2 = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledLabel1 = styled.div`
  display: flex;
  padding: 16px;
`;

const Parag = styled.div`
  padding: 2rem;
  h1 {
    padding-top: 2rem;
    font-size: 50px;
    @media screen and (max-width: 855px) {
      font-size: 20px;
    }
  }
  p {
  }
`;

const Btn = styled.div`
  padding: 2rem;
  margin-left: 40vh;
  align-item: center;
  text-align: center;
  @media screen and (max-width: 855px) {
    padding: 2rem;
  }
`;

const P2 = styled.div`
  padding-top: 2rem;
`;

const P = styled.div`
  padding-top: 2rem;
`;

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const submit = async (e) => {
    if (firstName === "" || email === "" || phone === "" || enquiry === "") {
      alert("* fields cannot be empty");
    } else {
      e.preventDefault();
      try {
        alert("Thanks, we will surely revert back soon");
        await axios.post("http://localhost:8000/contact", {
          firstName,
          lastName,
          email,
          phone,
          address,
          subject,
          enquiry,
        });
      } catch (e) {
        console.log(e);
      }
    }
    window.scrollTo(0, 0);
  };

  return (
    <Forms>
      <Contact>
        <Parag>
          <h1>Write your Enquires to us</h1>
          <P>
            <p>
              Fill out the form, or call us to set up a free in-home
              consultation.
            </p>
            <P2>
              <p>Service Areas:</p>
              <p>********* </p>
              <p>********** </p>
              <p>Uttar Pradesh</p> <p>******</p>
            </P2>
            <P2>
              <p>Contact Us</p>
              <p>**********</p>
            </P2>
          </P>
        </Parag>
        <StyledForm>
          <form action="POST">
            <StyledLabel2>
              <StyledLabel>
                First Name<p></p>:{" "}
              </StyledLabel>
              <StyledInput
                type="text"
                value={firstName}
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <StyledLabel>Last Name:</StyledLabel>
              <StyledInput
                type="text"
                value={lastName}
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </StyledLabel2>
            <StyledLabel2>
              <StyledLabel>
                Email<p></p>:
              </StyledLabel>
              <StyledInput
                type="email"
                value={email}
                placeholder="Enter email id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledLabel>Phone: </StyledLabel>
              <StyledInput
                type="text"
                value={phone}
                placeholder="Enter mobile no."
                onChange={(e) => setPhone(e.target.value)}
              />
            </StyledLabel2>
            <StyledLabel1>
              <StyledLabel>Address: </StyledLabel>
              <StyledInput
                type="text"
                value={address}
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </StyledLabel1>
            <StyledLabel1>
              <StyledLabel>Subject: </StyledLabel>
              <StyledInput
                type="text"
                value={subject}
                placeholder="Enter subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </StyledLabel1>
            <StyledLabel1>
              <StyledLabel>Type your enquiry here: </StyledLabel>
              <StyledInputArea>
                <textarea
                  rows="4"
                  cols="500"
                  value={enquiry}
                  placeholder="Enter yoir enquiry"
                  onChange={(e) => setEnquiry(e.target.value)}
                />
              </StyledInputArea>
            </StyledLabel1>

            <p>
              Make sure to avoid including any sensitive information you don't
              want to share with this business.
            </p>
            <Btn>
              <Button
                type="submit"
                onClick={submit}
                value="Submit"
                to="/contact"
                primary="true"
              >
                Submit
              </Button>
            </Btn>
          </form>
        </StyledForm>
      </Contact>
    </Forms>
  );
}

export default ContactUs;
