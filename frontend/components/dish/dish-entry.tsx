import { Component } from "uix/components/Component.ts";


interface DishData {
    title: string;
    time: string;
    servings: number;
}

@template<DishData> (( dish ) =>
    <li>{dish.title} {dish.amount}</li>
)

export class DishEntry extends Component<DishData> {}