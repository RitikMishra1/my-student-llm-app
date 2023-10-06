// PluginPreviews.js
import React from 'react';
import { ContentBox, PluginContainer, PluginButton } from './StyledComponents';  // example styled components

const pluginDescriptions = {
  MarketMinds: "Unveil market trends and forecast potential shifts with precision.",
  OpportuneEye: "Identify lucrative opportunities and mitigate prospective risks.",
  CompeteSmart: "Gain an edge with comprehensive competitor analysis and insights."
};

const PluginPreviews = () => (
  <ContentBox>
    <h2>Explore Our Plugins</h2>
    <p>Discover the power of Stella's plugins crafted for business excellence:</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {Object.entries(pluginDescriptions).map(([plugin, description], index) => (
        <PluginContainer key={index}>
          <h3>{plugin}</h3>
          <p>{description}</p>
          <PluginButton>Learn More</PluginButton>
        </PluginContainer>
      ))}
    </div>
  </ContentBox>
);

export default PluginPreviews;