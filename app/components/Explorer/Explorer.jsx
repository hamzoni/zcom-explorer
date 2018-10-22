import React from "react";
import Witnesses from "./Witnesses";
import CommitteeMembers from "./CommitteeMembers";
import FeesContainer from "../Blockchain/FeesContainer";
import BlocksContainer from "./BlocksContainer";
import AssetsContainer from "./AssetsContainer";
import AccountsContainer from "./AccountsContainer";
import counterpart from "counterpart";
import MarketsContainer from "../Exchange/MarketsContainer";
import {Tabs, Row, Col} from "antd";
const TabPane = Tabs.TabPane;

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    name: "blocks",
                    link: "/explorer/blocks",
                    translate: "explorer.blocks.title",
                    content: BlocksContainer
                },
                {
                    name: "assets",
                    link: "/explorer/assets",
                    translate: "explorer.assets.title",
                    content: AssetsContainer
                },
                {
                    name: "accounts",
                    link: "/explorer/accounts",
                    translate: "explorer.accounts.title",
                    content: AccountsContainer
                },
                {
                    name: "witnesses",
                    link: "/explorer/witnesses",
                    translate: "explorer.witnesses.title",
                    content: Witnesses
                },
                {
                    name: "committee_members",
                    link: "/explorer/committee-members",
                    translate: "explorer.committee_members.title",
                    content: CommitteeMembers
                },
                {
                    name: "markets",
                    link: "/explorer/markets",
                    translate: "markets.title",
                    content: MarketsContainer
                },
                {
                    name: "fees",
                    link: "/explorer/fees",
                    translate: "fees.title",
                    content: FeesContainer
                }
            ]
        };
    }

    render() {
        const onChange = value => {
            this.props.history.push(value);
        };
        //console.log(this.props.location.pathname);
        let defaultActive =
            this.props.location.pathname === "/"
                ? "/explorer/blocks"
                : this.props.location.pathname;
        console.log(defaultActive);
        return (
            <div>
                <Tabs
                    defaultActiveKey={defaultActive}
                    onChange={onChange}
                    animated={true}
                >
                    {this.state.tabs.map(tab => {
                        const TabContent = tab.content;
                        return (
                            <TabPane
                                key={tab.link}
                                tab={counterpart.translate(tab.translate)}
                            >
                                <TabContent />
                            </TabPane>
                        );
                    })}
                </Tabs>
            </div>
        );
    }
}

export default Explorer;
