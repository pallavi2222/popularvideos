import React from 'react'
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Container,Box,Header,InnerBox,Imgs,Maincontent,Text,Box1,InnerBox1,Imagecontent,InnerBoxs,Body1,Images} from './PopularVideos.styles'


export default function PopularVideos() {
  
    return (
      
          <div style={{height:"1008px"}}>
            <Body1>
                <Container>
                    <Link to="/Videopage" style={{textDecoration: 'none'}}>
                    <Header>Popular Video<ArrowForwardIosIcon style={{fontSize:'15px',color:'#3299d4'}}/></Header>
                    </Link>
                    <Box>
                      <InnerBox>
                            <Link to="/Videopage" style={{textDecoration: 'none'}}>
                            <Imgs src="https://cdn.jwplayer.com/thumbs/wK4WOnG0-1920.jpg"/>
                            </Link>
                      </InnerBox>
                      <InnerBox>
                            <Link to="/Videopage" style={{textDecoration: 'none'}}>
                            <Maincontent>China Is Creating ‘Sponge’ Cities To Protect Against Flooding</Maincontent>
                            </Link>
                            <Text >Hundreds of world cities could face a 50cm rise in sea levels by 2050. Now, over 30 areas in China have signed up to become 'sponge' cities. Here's how it works.</Text>
                      </InnerBox>
            
                    </Box>
                    <Box1>
                      <InnerBox1>
                          <Link to="/Videopage" style={{textDecoration: 'none'}}>
                          <Images src={"https://cdn.jwplayer.com/thumbs/fk8mCk6r-1920.jpg"}/>
                          <Imagecontent>Do You ‘Doomscroll’? If So, Here’s How To Stop</Imagecontent>
                          </Link>
                      </InnerBox1>
                      <InnerBox1>
                          <Link to="/Videopage" style={{textDecoration: 'none'}}>
                          <img src={"https://cdn.jwplayer.com/thumbs/agsIAJhE-1920.jpg"} style={{height:'90%',width:'100%'}} />
                          <Imagecontent>Paris Is Transforming Its Most Famous Street Into An ‘Extraordinary Garden’</Imagecontent>
                          </Link>
                      </InnerBox1>
                      <InnerBox1>
                          <Link to="/Videopage" style={{textDecoration: 'none'}}>
                          <img src={"https://cdn.jwplayer.com/thumbs/edXYAWNA-1920.jpg"} style={{height:'90%',width:'100%'}} />
                          <Imagecontent>This Machine Grows New Skin For Burn Patients</Imagecontent>
                          </Link>
                      </InnerBox1>
                      <InnerBox1>
                          <Link to="/Videopage" style={{textDecoration: 'none'}}>
                          <img src={"https://cdn.jwplayer.com/thumbs/UolFKNv1-1920.jpg"} style={{height:'90%',width:'100%'}} />
                          <Imagecontent>Deforestation In Indonesia Has Hit A Record Low</Imagecontent>
                          </Link>
                      </InnerBox1>
                    </Box1>
              </Container>
            </Body1>
          </div> 
        
    )
}
