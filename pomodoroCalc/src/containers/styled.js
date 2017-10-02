import styled from 'styled-components';

const __StyledElem__ = styled.div`
  .btn {
    margin: 0 10px;
  }
  .container-timer {
    width: 400px;
    margin: 0 auto;
    margin-top: 100px;
  
    .chooseWrap {
      p {
        text-align: center;
        font-size: 18px;
      }
      display: flex;
      justify-content: center;
      .restInterval {
        .btn-outline-danger {
          background-color: red;
        }
      }
      .targetMin {
        margin-left: 20px;
        .btn-outline-danger {
          background-color: red;
        }
      }
    }
    .containerTimerLog {
      display: flex;
      justify-content: center;
      .timerLog {
        border: 3px solid white;
        margin-top: 35px;
        background-color: red;
        width: 150px;
        height: 150px;
        border-radius: 82px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      span {
        color: white;
        font-size: 25px;
      }
    }
    }
    
  }
`;
export default __StyledElem__;
