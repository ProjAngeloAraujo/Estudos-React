import { BoxBase, BoxCenterY } from './elements/Box';
import  { Paragraph, Title, Subtitle } from './elements/Typography';

function Hero () {
    return (
        <>
            <BoxBase>
                <img src="https://www.infoescola.com/wp-content/uploads/2008/05/lobo.jpg" alt="" style={{ width: '20%', height: '50vh', borderRadius: '5vh' }} />
                <BoxCenterY>
                    <Title bold={true}>
                        Lorem
                    </Title>
                    <Subtitle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Subtitle>
                    <Paragraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel eos modi debitis veritatis voluptas officia similique! Cupiditate nihil necessitatibus nesciunt aliquam error quam! Nemo debitis sapiente nulla animi corrupti?
                    </Paragraph>
                </BoxCenterY>
            </BoxBase>
        </>
    )
}

export default Hero