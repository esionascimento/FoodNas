import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import * as S from "./styled";

interface IInputMaterialEdit {
    handleChange?: (event: any) => void;
    value?: number | string;
}

export const DropHeader: React.FC<IInputMaterialEdit> = () => {

    return (
        <S.DivHover>
            <div >
                <S.SpanDrop>
                    <CheckCircleOutlined />
                    <span>10 minutos</span>
                </S.SpanDrop>
            </div>
            <div >
              <S.SpanDrop>
                  <CheckCircleOutlined />
                  <span>15 minutos</span>
              </S.SpanDrop>   
            </div>
            <div>
              <S.SpanDrop>
                  <CheckCircleOutlined />
                  <span>30 minutos</span>
              </S.SpanDrop>
            </div>
            <div>
              <S.SpanDrop>
                  <CloseCircleOutlined />
                  <span>Fechar Loja</span>
              </S.SpanDrop>
            </div>
        </S.DivHover>
    );
};
