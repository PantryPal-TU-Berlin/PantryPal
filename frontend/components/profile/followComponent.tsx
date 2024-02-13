import { Component } from "uix/components/Component.ts";

import { ProfilDaten } from "backend/data.ts";

@template<ProfilDaten>((props) => {
    return (
		<p id="followButton">{props.followString}</p>
)})


export class FollowComponent extends Component<ProfilDaten>{}