import s from './Statistics.module.css';
import { Component } from 'react';

class Buttons extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positivePercentage: this.props.initialValue,
  };

  //   onIncrement = () => {
  //     this.setState(prevState => ({
  //       value: prevState.value + 1,
  //     }));
  //   };

  render() {
    const { value } = this.state;

    return (
      <section className={s.statistics}>
        <h2 className={s.title}>Please leave your feedback</h2>
        <button className={s.item} type="button">
          Good
        </button>
        <button className={s.item} type="button">
          Bad{' '}
        </button>
        <button className={s.item} type="button">
          Neutral
        </button>
      </section>
    );
  }
}

export default Buttons;

// const Controls = ({ onIncrement, onDecrement }) => (
//   <div className="Counter__controls">
//     <button type="button" onClick={onIncrement}>
//       Увеличить на 1
//     </button>
//     <button type="button" onClick={onDecrement}>
//       Уменьшить на 1
//     </button>
//   </div>
// );

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }
