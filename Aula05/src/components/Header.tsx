import  { Paragraph } from './elements/Typography';
import { BoxBase, BoxCenter } from './elements/Box';
import { ButtonBase } from './elements/Buttons';

function Header (){
    return (
        <>
            <BoxBase>
                <BoxCenter>
                    <Paragraph>
                        News
                    </Paragraph>
                    <Paragraph>
                        FAQs
                    </Paragraph>
                </BoxCenter>
                <BoxCenter>
                        <Paragraph bold={true}>
                            Login
                        </Paragraph>
                        <ButtonBase color='Green'>
                            Create Account
                        </ButtonBase>
                </BoxCenter>
            </BoxBase>
        </>
    )
}

export default Header