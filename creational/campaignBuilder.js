class CampaignBuilder {
  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setSentTime(date) {
    this.sentDate = date;
    return this;
  }

  setRecipients(recipients) {
    this.recipients = recipients;
    return this;
  }

  build() {
    return new CampaignBuilder();
  }
}

const campaign = new CampaignBuilder().setName('Test campaign')
  .setDescription('Test')
  .setSentTime(Date.now())
  .setRecipients(['John', '0991284365', '20021-05-03']);
console.log(campaign);  
