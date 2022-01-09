import React, { useState } from "react";

import { DropHeader } from "./dropHeader";

import * as S from "./styled";

const Header: React.FC = () => {
  const [drop, setDrop] = useState(false);

  

  const dropHandle = () => {
    setDrop(!drop);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <span>1</span>
      </div>

      <div>
      <S.DivLink
        
        onMouseEnter={
            
          dropHandle
        }
        onMouseLeave={
            
          dropHandle
        }
    >
        
        <span
            style={{
                backgroundColor:
                    "transparent",
            }}
        >
            PAUSAR
        </span>
        <div>
            {drop && <DropHeader />}
        </div>
      </S.DivLink>
      </div>
    </div>
  )
}

export default Header;
