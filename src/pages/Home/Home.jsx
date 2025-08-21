import React from "react";

import Footer from "../../components/layout/Footer";
import { FeatureCard, ListItem } from "../../components/Cards";
import top from "../../assets/top.svg";
import waveswhite from "../../assets/waves-white.svg";
import bottom from "../../assets/bottom.svg";
import logoweave from "../../assets/logo-weave.svg";
import logoattlasian from "../../assets/logo-attlasian.svg";
import logoinvision from "../../assets/logo-invision.svg";
import logoshopif from "../../assets/logo-shopify.svg";
import logogoogledrive from "../../assets/logo-google-drive.svg";
import logoslack from "../../assets/logo-slack.svg";
import logoasana from "../../assets/logo-asana.svg";
import team2 from "../../assets/team-2-200h.jpg";
import team3 from "../../assets/team-3-200h.jpg";
import team4 from "../../assets/team-4-200h.jpg";
import curved61500h from "../../assets/curved6-1500h.jpg";
import cube1 from "../../assets/cube1.svg";
import rocket1 from "../../assets/rocket1.svg";
import credi20 from "../../assets/credit card1.svg";
import person1 from "../../assets/person1.svg";
import { motion } from "framer-motion";

const Home = (props) => {
  return (
    <div className="home-container10">
      {/* <Header></Header> */}
      <motion.div
        className="home-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="home-container11">
          <div className="home-card">
            <h1 className="home-text10 HeadingOne">Soft Design System.</h1>
            <h1 className="home-text11 HeadingOne">Choose the best</h1>
            <span className="home-text12 Lead">
              <span>
                Find the story of Creative Tim&apos;s most complex design
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                system and all the work that make this design available.
              </span>
            </span>
            <div className="home-container12">
              <div className="home-container13">
                <div className="primary-pink-button-container">
                  <button className="primary-pink-button-button button ButtonSmall">
                    Contact-us
                  </button>
                </div>
              </div>
              <div className="outline-gray-button-container">
                <button className="outline-gray-button-button button ButtonSmall">
                  Read more
                </button>
              </div>
            </div>
            <div className="home-container14">
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                className="home-image10"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                className="home-image11"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                className="home-image12"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                className="home-image13"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <img alt="image" src={curved61500h} className="home-image14" />
      <motion.section
        className="home-features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <FeatureCard
          text="Choose the best design system for your next product."
          title="Components"
          imageSrc={cube1}
          idx={1}
        ></FeatureCard>
        <FeatureCard
          imageSrc={person1}
          text="Get the latest design ideas and turn it into reality."
          title="Design"
          idx={2}
        ></FeatureCard>
        <FeatureCard
          text="Make your code easier to maintain using variables."
          title="Less Code"
          imageSrc={rocket1}
          idx={3}
        ></FeatureCard>
        <FeatureCard
          text="This design system is fully supported on any device."
          title="Fully Responsive"
          imageSrc={credi20}
          idx={4}
        ></FeatureCard>
      </motion.section>
      <motion.section
        className="home-container15"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="home-container16">
          <h1 className="home-text15 HeadingOne">
            <span className="home-text16">From nothing to something</span>
          </h1>
          <span className="home-text17">
            <span className="home-text18">
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </span>
        </div>
        <div className="home-container17">
          <div className="home-container18">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image15"
            />
            <span className="home-text19 Small">
              <span className="home-text20">
                &quot;Over the span of the satellite record, Arctic sea ice has
                been declining significantly, while sea ice in the Antarctichas
                increased very slightly&quot;
              </span>
              <br></br>
              <span className="home-text22">-NOAA</span>
            </span>
            <div className="home-container19">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image16"
              />
            </div>
          </div>
          <div className="home-container20">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image17"
            />
            <div className="home-container21">
              <h3 className="HeadingTwo">
                <span className="home-text24">
                  So what does the new record for the lowest level of winter ice
                  actually mean
                </span>
              </h3>
              <p>
                <br></br>
                <span className="home-text26">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text29">
                  For a start, it does not automatically follow that a record
                  amount of ice will melt this summer. More important for
                  determining the size of the annual thaw is the state of the
                  weather as the midnight sun approaches and temperatures rise.
                  But over the more than 30 years of satellite records,
                  scientists have observed a clear pattern of decline,
                  decade-by-decade.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text32">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="home-testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="home-container22">
          <div className="home-container23">
            <div className="home-container24">
              <h2 className="home-text33 HeadingOne">Work with us</h2>
              <p className="home-text34 Lead">
                <span className="home-text35">
                  Whatever your qualification is - we got you!
                </span>
              </p>
              <p className="home-text36 Body">
                <span className="home-text37">
                  &quot;Take up one idea. Make that one idea your life - think
                  of it, dream of it, live on that idea. Let the brain, muscles,
                  nerves, every part of your body, be full of that idea, and
                  just leave every other idea alone. This is the way to success.
                  A single rose can be my garden... a single friend, my
                  world.&quot;
                </span>
              </p>
              <p className="home-text38">Mark Jojansen</p>
              <p className="home-text39 Small">Project manager, Atlassian</p>
              <div className="home-container25">
                <img alt="image" src={team4} className="home-image18" />
                <div className="home-container26"></div>
                <img alt="image" src={team3} className="home-image19" />
                <div className="home-container27"></div>
                <img alt="image" src={team2} className="home-image20" />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container28">
              <div className="home-container29">
                <div className="home-container30">
                  <img alt="image" src={logoasana} className="home-image21" />
                </div>
                <div className="home-container31">
                  <img alt="image" src={logoslack} className="home-image22" />
                </div>
                <div className="home-container32">
                  <img
                    alt="image"
                    src={logogoogledrive}
                    className="home-image23"
                  />
                </div>
              </div>
              <div className="home-container33">
                <div className="home-container34">
                  <img alt="image" src={logoshopif} className="home-image24" />
                </div>
                <div className="home-container35">
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                    className="home-image25"
                  />
                </div>
                <div className="home-container36">
                  <img
                    alt="image"
                    src={logoinvision}
                    className="home-image26"
                  />
                </div>
              </div>
              <div className="home-container37">
                <div className="home-container38">
                  <img
                    alt="image"
                    src={logoattlasian}
                    className="home-image27"
                  />
                </div>
                <div className="home-container39">
                  <img alt="image" src={logoweave} className="home-image28" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src={bottom} className="home-bottom-wave-image" />
        <img alt="image" src={waveswhite} className="home-image29" />
        <img alt="image" src={top} className="home-top-wave-image" />
      </motion.section>
      <motion.section
        className="home-contaier"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="home-container40">
          <div className="home-container41">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text40 HeadingTwo">
            <span className="home-text41">Beware The Components</span>
          </h2>
          <h3 className="home-text42 HeadingTwo">
            <span className="home-text43">How To Handle Them</span>
            <br></br>
          </h3>
          <span className="home-text44">
            <span className="home-text45">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container42">
          <div className="home-container43">
            <div className="home-container44"></div>
            <div className="home-container45">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon3">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text46 HeadingOne">Search and Discover!</h1>
              <span className="home-text47">
                <span>Website visitors</span>
                <span></span>
              </span>
              <div className="outline-black-button-container">
                <button className="outline-black-button-button button ButtonSmall">
                  Get strarted
                </button>
              </div>
            </div>
          </div>
          <div className="home-container46">
            <ListItem
              idx={1}
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              idx={2}
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <motion.div
          className="home-container47"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + 1 * 0.1, duration: 0.4 }}
        >
          <div className="home-container48">
            <ListItem
              idx={3}
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
             idx={4}
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              idx={5}
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container49">
            <div className="home-container50"></div>
            <div className="home-container51">
              <svg viewBox="0 0 1152 1024" className="home-icon5">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text50 HeadingOne">Talk and Meet!</h1>
              <span className="home-text51">
                <span>Website visitors</span>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
