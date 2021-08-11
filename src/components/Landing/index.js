import Layout from "./components/layout"
import DescribeSection from "./components/describe"
import InformationBlock from "./components/information"
import {landing} from "../utils/landing"

const LandingView = () => {
    return (
        <div className="" style={{ background: "#fff" }}>
            <Layout>
                <InformationBlock img={landing.block_1.image} altImg={landing.block_1.altImg} title={landing.block_1.title} text={landing.block_1.text} />
                <div className="" />
                <DescribeSection />
            </Layout>
        </div>
    )
}

export default LandingView