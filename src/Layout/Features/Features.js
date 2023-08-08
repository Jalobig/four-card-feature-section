import React from "react";
import classes from "./Features.module.scss";
import Card from "../../components/Card/Card";
import IconSupervisor from "../../images/icon-supervisor.svg";
import IconCalculator from "../../images/icon-calculator.svg";
import IconKarma from "../../images/icon-karma.svg";
import IconTeamBuilder from "../../images/icon-team-builder.svg";

const Features = () => {
  return (
    <main className={classes.features}>
      <div className={classes.features__row}>
        <Card
          title="Supervisor"
          color="hsl(180, 62%, 55%)"
          img={IconSupervisor}
        >
          Monitors activity to identify project roadblocks
        </Card>
        <div className={classes.features__column}>
          <Card
            className={classes.features__column__first}
            title="Team Builder"
            color="hsl(0, 78%, 62%)"
            img={IconTeamBuilder}
          >
            Scans our talent network to create the optimal team for your project
          </Card>
          <Card title="Karma" color="hsl(34, 97%, 64%)" img={IconKarma}>
            Regularly evaluates our talent to ensure quality
          </Card>
        </div>
        <Card
          title="Calculator"
          color="hsl(212, 86%, 64%)"
          img={IconCalculator}
        >
          Uses data from past projects to provide better delivery estimates
        </Card>
      </div>
    </main>
  );
};

export default Features;
