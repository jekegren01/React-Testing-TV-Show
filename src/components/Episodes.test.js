import React from "react";
import {render} from "@testing-library/react";

import Episodes from "./Episodes";

test("Episodes component renders ", ()=>{
    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>);

    expect(queryAllByTestId("episode")).toHaveLength(0);

    
    rerender(<Episodes episodes={data}/>);
    expect(queryAllByTestId("episode")).toHaveLength(1);
});

const data = [
    {
        id: '1',
        name: "Episode 1"
    }
];
