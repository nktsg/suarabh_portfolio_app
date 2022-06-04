import styled from "styled-components";

import { ContactItem } from "./contact_item";
import { ContactTitle } from "./contact_item";
import { ContactAddress } from "./contact_item";
import ContactArrowIcon from "../contact_item_arrow";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ContactCard({ contacts }) {
  return (
    <>
      <ContactWrapper>
        {contacts.map((contact, index) => (
          <>
            <ContactItem marginTop={index !== 0 ? "24px" : "0px"}>
              <ContactTitle>
                {`${contact.title}`}
                <span dangerouslySetInnerHTML={{ __html: "&nbsp; &nbsp;" }} />
                <ContactArrowIcon />
              </ContactTitle>
              <ContactAddress>{contact.address}</ContactAddress>
            </ContactItem>
          </>
        ))}
      </ContactWrapper>
    </>
  );
}
