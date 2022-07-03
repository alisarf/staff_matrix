import { createGlobalStyle } from "styled-components";

export const CustomStyle = createGlobalStyle`
  //Here you can make custom styles and use them in differents components as className
  //Example:

  .mtrx-align-center{
    text-align: center;
  }

  .mtrx-align-start{
    text-align: start;
  }

  .mtrx-align-end{
    text-align: end;
  }

  .mtrx-flex{
    display: flex;
  }

  .mtrx-jc-start{
    justify-content: start;
  }

  .mtrx-jc-center{
    justify-content: center;
  }

  .mtrx-jc-end{
    justify-content: end;
  }

  .mtrx-items-start{
    align-items: start;
  }

  .mtrx-items-center{
    align-items: center;
  }

  .mtrx-items-end{
    align-items: end;
  }

  .mtrx-fw-bold{
    font-weight: 700 !important;
  }

  .mtrx-fw-semibold{
    font-weight: 600 !important;
  }

  .mtrx-fw-medium{
    font-weight: 500 !important;
  }

  .mtrx-fw-regular{
    font-weight: 400 !important;
  }

  .mtrx-orange-color{
    color: var(--orange-200) !important;
  }

  .mtrx-very-dark-text-color{
    color: var(--grey-100) !important;
  }

  .mtrx-dark-text-color{
    color: var(--grey-300) !important;
  }

  .mtrx-grey-text-color{
    color: var(--grey-500) !important;
  }

  .mtrx-grey-light-text-color{
    color:var(--grey-400) !important;
  }
`;
