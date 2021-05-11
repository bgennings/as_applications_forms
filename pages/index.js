import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DescriptionIcon from "@material-ui/icons/Description";
import ChangeHistoryTwoToneIcon from "@material-ui/icons/ChangeHistoryTwoTone";
import Menu from "@material-ui/icons/Menu";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import "@fontsource/roboto";
import "@fontsource/roboto-slab";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ExitIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import ContinueIcon from "@material-ui/icons/Forward";

export default function IndexPage() {
  return (
    // topbar
    <div display="flex" flexdirection="row">
      <Box boxShadow={1} p={3} style={{ background: "#e1e1e1" }}>
        <Typography variant="h6">
          <IconButton>
            <ChangeHistoryTwoToneIcon style={{ transform: "scale(1.5)" }} />
          </IconButton>
          <span style={{ color: "#00558E" }}> HURON </span>
          <span style={{ color: "#455B6B" }}> RESEARCH SUITE</span>
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        {/* sidebar */}
        <Box display="flex" flexDirection="row">
          <Box
            display="flex"
            flexDirection="row"
            style={{ background: "#e1e1e1" }}
          >
            <Box>
              <Box
                borderTop={1}
                borderColor="#9e9e9e"
                variant="span"
                style={{ background: "#d8d8d8" }}
              >
                <Menu />
                <ChevronLeft />
              </Box>
              <Box
                pl={2}
                pr={4}
                style={{
                  background: "#e8970c"
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  color="#20323f"
                  align="left"
                >
                  General Intake
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* main window */}
          <Box padding={2} boxShadow={1}>
            <Box>
              <Breadcrumbs aria-label="breadcrumb">
                <Typography variant="body2">You are here:</Typography>
                <Typography variant="body2">
                  <IconButton style={{ transform: "scale(.75)" }}>
                    <DescriptionIcon />
                  </IconButton>
                  New Agreement
                </Typography>
              </Breadcrumbs>
              <Typography variant="h5" gutterBottom>
                Creating New: Agreement
              </Typography>
              <Divider light />
            </Box>
            <Container fixed>
              <Typography variant="h4">General Intake</Typography>
              <br />
              <Typography variant="body1">
                <Grid container direction={"column"} spacing={3}>
                  <Grid item>
                    <Autocomplete
                      freeSolo
                      native
                      disableClearable
                      options={pis.map(
                        (option) => option.firstName + " " + option.lastName
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="pi"
                          label="Principal investigator "
                          placeholder="Select the principal investigator "
                          type="string"
                          required
                          variant="outlined"
                          InputProps={{ ...params.InputProps, type: "search" }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item>
                    <Autocomplete
                      freeSolo
                      native
                      disableClearable
                      options={allPersons.map(
                        (option) => option.firstName + " " + option.lastName
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="primaryContact"
                          label="Primary contact"
                          placeholder="Select a primary contact"
                          type="string"
                          required
                          variant="outlined"
                          InputProps={{ ...params.InputProps, type: "search" }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item>
                    <Tooltip
                      style={{ fontSize: "2em" }}
                      title="If the agreement document has already been drafted, you can attach it to the Agreements SmartForm by clicking the Upload button.  However, if Agreements office staff are going to create the first draft of the agreement, check the First draft to be generated internally? box instead. Agreements office staff will generate or upload a draft by running the Generate Agreement activity.  Note: If you upload a draft here and Agreements office staff subsequently generate or upload a draft, their document will automatically replace the one you uploaded on this page."
                      arrow
                    >
                      <Autocomplete
                        freeSolo
                        native
                        multiple
                        disableClearable
                        options={allPersons.map(
                          (option) => option.firstName + " " + option.lastName
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            id="otherPersonnel"
                            label="Other personnel"
                            placeholder="Select other personnel who can read and edit this agreement"
                            type="string"
                            multiple
                            variant="outlined"
                            InputProps={{
                              ...params.InputProps,
                              type: "search"
                            }}
                          />
                        )}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title="Type a short name for the agreement. As a guideline, keep it shorter than 50 characters."
                      arrow
                    >
                      <TextField
                        id="title"
                        label="Title"
                        placeholder="Enter an agreement title"
                        type="string"
                        helperText="Type a short name for the agreement."
                        variant="outlined"
                        fullWidth={true}
                      ></TextField>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Autocomplete
                      freeSolo
                      native
                      disableClearable
                      options={agreementTypes.map((option) => option.typeName)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="agreementType"
                          label="Agreement type"
                          placeholder="Select the type of agreement"
                          type="string"
                          required
                          variant="outlined"
                          InputProps={{ ...params.InputProps, type: "search" }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label="Upload agreement draft (or check the box below)"
                      labelPlacement="start"
                      control={
                        <Button variant="contained" component="label">
                          Upload File
                          <input type="file" hidden />
                        </Button>
                      }
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      label="First draft to be generated internally?"
                      labelPlacement="start"
                      control={<Checkbox name="checkedB" color="primary" />}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="description"
                      label="Description"
                      placeholder="Describe the agreement"
                      type="string"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="comments"
                      label="Comments for review"
                      placeholder="Capture any additional comments to be provided to Agreements Office Staff Members to inform their review"
                      type="string"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
              </Typography>
            </Container>
          </Box>
        </Box>
      </Box>{" "}
      <div>
        <Fab color="primary" aria-label="exit">
          <ExitIcon />
        </Fab>{" "}
        <Fab color="primary" aria-label="save">
          <SaveIcon />
        </Fab>{" "}
        <Fab color="primary" aria-label="continue">
          <ContinueIcon />
        </Fab>
      </div>
    </div>
  );
}
const agreementTypes = [
  { typeName: "Clinical Trial Agreement" },
  { typeName: "Confidential/Non-Disclosure Agreement" },
  { typeName: "Data Use Agreement" },
  { typeName: "Master Agreement" },
  { typeName: "Material Transfer Agreement" },
  { typeName: "Outgoing Subaward" },
  { typeName: "Sponsored Research Agreement" }
];

const pis = [
  { firstName: "Rebecca", lastName: "Simms (pi)" },
  { firstName: "Phil", lastName: "Bivens (pi2)" },
  { firstName: "Juan", lastName: "Pablo (pi3)" },
  { firstName: "Joe", lastName: "Bloggs (pi4)" }
];

const allPersons = [
  { firstName: "Alex", lastName: "Adesina" },
  { firstName: "Test", lastName: "All Award Reader" },
  { firstName: "Sarah", lastName: "Allen (safa)" },
  { firstName: "Todd", lastName: "Altman (cso2)" },
  { firstName: "Juan", lastName: "Alvarez" },
  { firstName: "Carmen", lastName: "Alverado (coord)" },
  { firstName: "Serafina", lastName: "Arkadin (safa2)" },
  { firstName: "Richard", lastName: "Arm (irbch)" },
  { firstName: "Norma", lastName: "Arnot (norma_arnot)" },
  { firstName: "Test", lastName: "Authorized Organization Representative" },
  { firstName: "Justin", lastName: "Barclay" },
  { firstName: "John", lastName: "Benton" },
  { firstName: "Barb", lastName: "Berry" },
  { firstName: "Phil", lastName: "Bivens (pi2)" },
  { firstName: "Blake", lastName: "Blastowitz (ins)" },
  { firstName: "Joe", lastName: "Bloggs (pi4)" },
  { firstName: "Neel", lastName: "Blue (grants-dm)" },
  { firstName: "Hans", lastName: "Borgnine (safca2)" },
  { firstName: "Arjun", lastName: "Bright (irb-dm)" },
  { firstName: "Mary", lastName: "Brown" },
  { firstName: "Test", lastName: "Budget Specialist" },
  { firstName: "Judy", lastName: "Butler" },
  { firstName: "Naomi", lastName: "Butters (safca1)" },
  { firstName: "Agnatha", lastName: "Buyer (ab)" },
  { firstName: "Jennifer", lastName: "Carlson" },
  { firstName: "Pim", lastName: "Carny (rso)" },
  { firstName: "Calvin", lastName: "Carson (safcch2)" },
  { firstName: "Authur", lastName: "Census (acc)" },
  { firstName: "Test", lastName: "Chairman" },
  { firstName: "Christopher", lastName: "Chance (safcch)" },
  { firstName: "Alexis", lastName: "Cherry (cso)" },
  { firstName: "Venkat", lastName: "Chopra" },
  { firstName: "Test", lastName: "Clinical Trial Office" },
  { firstName: "Test", lastName: "ClinicalServices" },
  { firstName: "Tim", lastName: "Coleman" },
  { firstName: "Bobby", lastName: "Colton (iacuccch2)" },
  { firstName: "Andre", lastName: "Conte (ac)" },
  { firstName: "Test", lastName: "Contract Specialist" },
  { firstName: "Mark", lastName: "Cook" },
  { firstName: "Effie", lastName: "Correlly (iacuccomm6)" },
  { firstName: "Test", lastName: "Coverage Analyst" },
  { firstName: "Audrey", lastName: "Cress (ac2)" },
  { firstName: "Lucy", lastName: "Crowley" },
  { firstName: "Alice", lastName: "Cunningham (safcomm9)" },
  { firstName: "Lazlo", lastName: "Czerch (coicomm3)" },
  { firstName: "Lazlo", lastName: "Czerch (irbcomm2)" },
  { firstName: "Barbara", lastName: "Daniels (safcomm15)" },
  { firstName: "Eleanor", lastName: "Danz" },
  { firstName: "Test", lastName: "Department Administrator" },
  { firstName: "Test", lastName: "Department Reviewer/Chair" },
  { firstName: "Mahika", lastName: "Dew (aops-sm)" },
  { firstName: "Vincent", lastName: "DiMalgio (ss-imm)" },
  { firstName: "Roger", lastName: "Dimelin (safcomm7)" },
  { firstName: "Anna", lastName: "Director (aod)" },
  { firstName: "Joe", lastName: "DocReviewer" },
  { firstName: "Peter", lastName: "Donahue (ss-gas)" },
  { firstName: "John", lastName: "Dow" },
  { firstName: "Guideon", lastName: "Dubois" },
  { firstName: "Fred", lastName: "Durgess (iacucca2)" },
  { firstName: "Daniel", lastName: "Duvette (ss-on)" },
  { firstName: "Stewart", lastName: "Edwards" },
  { firstName: "Susan", lastName: "Elmira (coicomm2)" },
  { firstName: "Susan", lastName: "Elmira (irbcomm1)" },
  { firstName: "Amanda", lastName: "Equipment (aem)" },
  { firstName: "Matt", lastName: "Evans" },
  { firstName: "Anthony", lastName: "Export (axc)" },
  { firstName: "Emily", lastName: "Faller" },
  { firstName: "Bronsky", lastName: "Farthasis (safcomm10)" },
  { firstName: "Alfred", lastName: "Financier (afo)" },
  { firstName: "Steve", lastName: "Fisher (dept-imm)" },
  { firstName: "Grace", lastName: "Fong" },
  { firstName: "Ben", lastName: "Fowler (safcomm5)" },
  { firstName: "Allen", lastName: "Fraser" },
  { firstName: "Lisa", lastName: "Fredricks" },
  { firstName: "Angelo", lastName: "Garci (coicomm4)" },
  { firstName: "Jessica", lastName: "Garrett" },
  { firstName: "Allen", lastName: "George" },
  { firstName: "Test", lastName: "GlobalGrantsViewer" },
  { firstName: "Richard", lastName: "Goodknight (safcomm14)" },
  { firstName: "Anika", lastName: "Grace (iacuc-dm)" },
  { firstName: "Test", lastName: "Grants Assistant" },
  { firstName: "Jill", lastName: "Grayson (irbcomm3)" },
  { firstName: "Amy", lastName: "Grossman" },
  { firstName: "Chetan", lastName: "Gusto (irb-sm)" },
  { firstName: "Josh", lastName: "Hanson (iacuccomm3)" },
  { firstName: "Baron", lastName: "Hark (iacuccomm8)" },
  { firstName: "Courtney", lastName: "Harr" },
  { firstName: "Blaze", lastName: "Harrington (coicch2)" },
  { firstName: "Hal", lastName: "Hartman (dept-gen)" },
  { firstName: "Johnstone", lastName: "Harvey (iacuccomm5)" },
  { firstName: "Giva", lastName: "Hill (safety-dm)" },
  { firstName: "Mark", lastName: "Honns (irbca2)" },
  { firstName: "Richard", lastName: "Ing (dept-gas)" },
  { firstName: "Alan", lastName: "Inventory (aim)" },
  { firstName: "Amber", lastName: "Invoice (aic)" },
  { firstName: "Test ", lastName: "Invoice Reviewer" },
  { firstName: "Test", lastName: "Invoicing Specialist" },
  { firstName: "Aleisha", lastName: "Jackson (safca3)" },
  { firstName: "Robert", lastName: "Jacobs" },
  { firstName: "Martin", lastName: "Jacobson" },
  { firstName: "George", lastName: "Johnson" },
  { firstName: "Judy", lastName: "Jones (approver1)" },
  { firstName: "Jack", lastName: "Jones (approver2)" },
  { firstName: "Lisa", lastName: "Jones (irbc2)" },
  { firstName: "Jimmy", lastName: "Jones (irbrc1)" },
  { firstName: "Jane", lastName: "Jones (irbrc2)" },
  { firstName: "Lisa", lastName: "Jones (rev2)" },
  { firstName: "Abdul", lastName: "Kareem" },
  { firstName: "Anil", lastName: "Khan" },
  { firstName: "Rajesh", lastName: "King (coi-sm)" },
  { firstName: "Ava", lastName: "Lambert" },
  { firstName: "Test", lastName: "Lead SP" },
  { firstName: "Nate", lastName: "Long" },
  { firstName: "Ayaan", lastName: "Luck (agreements-dm)" },
  { firstName: "Albert", lastName: "Lyman" },
  { firstName: "Carolus", lastName: "Magnus (safcomm2)" },
  { firstName: "Raine", lastName: "Malia (safca4)" },
  { firstName: "Falicity ", lastName: "Manager (fm)" },
  { firstName: "Elvis", lastName: "Mann (rso2)" },
  { firstName: "Jim", lastName: "Markosi (iacucc)" },
  { firstName: "Valerie", lastName: "Markosi (iacuccomm4)" },
  { firstName: "Boot", lastName: "Marlson (safcomm13)" },
  { firstName: "Ernesto", lastName: "Martinez" },
  { firstName: "Cheryl", lastName: "Masters (safcomm1)" },
  { firstName: "Clay", lastName: "Matusow (safcomm4)" },
  { firstName: "Orlando", lastName: "Max (irbc)" },
  { firstName: "Orlando", lastName: "Max (rev1)" },
  { firstName: "Tim", lastName: "McMathus (safcomm6)" },
  { firstName: "Charles", lastName: "McNider (safcomm3)" },
  { firstName: "Martha", lastName: "Mears (ss-rad)" },
  { firstName: "Carlos", lastName: "Menendez (iacuccomm7)" },
  { firstName: "Fresca", lastName: "Mina (coicomm8)" },
  { firstName: "Raahithya", lastName: "Money (grants-sm)" },
  { firstName: "Chanda", lastName: "Moon (safety-sm)" },
  { firstName: "Bob", lastName: "Moore" },
  { firstName: "Tomas", lastName: "Moreau" },
  { firstName: "Jake", lastName: "Morrow (iacucd)" },
  { firstName: "Calista", lastName: "Morrow (pam)" },
  { firstName: "Tony", lastName: "Mosk (irbcomm8)" },
  { firstName: "Delton", lastName: "Munroe (viewer)" },
  { firstName: "Oliver", lastName: "Murray (vet2)" },
  { firstName: "Etso", lastName: "Musaka (reg)" },
  { firstName: "Wallace", lastName: "Myer (safcomm12)" },
  { firstName: "Jordan", lastName: "Myers" },
  { firstName: "Anne", lastName: "Myers (irbd2)" },
  { firstName: "Anne", lastName: "Myers (man2)" },
  { firstName: "Mary", lastName: "Nelson" },
  { firstName: "Anne", lastName: "Newby" },
  { firstName: "Rajani", lastName: "Night (agreements-sm)" },
  { firstName: "Eugene", lastName: "Obi" },
  { firstName: "Jiri", lastName: "Okubo (coicomm6)" },
  { firstName: "Jiri", lastName: "Okubo (irbcomm5)" },
  { firstName: "Blair", lastName: "Olsen (bso2)" },
  { firstName: "Barry", lastName: "ONeill (bso)" },
  { firstName: "Test", lastName: "Opportunity Administrator" },
  { firstName: "Test", lastName: "Opportunity Approver" },
  { firstName: "Alana", lastName: "Ordercon (aoc)" },
  { firstName: "Simone", lastName: "Orgeuil (ss-imm)" },
  { firstName: "Juan", lastName: "Pablo (pi3)" },
  { firstName: "S.K.", lastName: "Park (irbr2)" },
  { firstName: "Stella", lastName: "Parker" },
  { firstName: "Jeyella", lastName: "Parses (iacuccomm1)" },
  { firstName: "Test", lastName: "Participant Tracker" },
  { firstName: "Susan", lastName: "Perelli (safs2)" },
  { firstName: "Miles", lastName: "Perlson (safviewer)" },
  { firstName: "Carl", lastName: "Peters (irbcch)" },
  { firstName: "Arvin", lastName: "Pilot (irbca1)" },
  { firstName: "Seren", lastName: "Pitalsky (io)" },
  { firstName: "Rachel", lastName: "Poll" },
  { firstName: "Sally", lastName: "Porter" },
  { firstName: "Felicia", lastName: "Presley (coia2)" },
  { firstName: "Salta", lastName: "Press (iacucc2)" },
  { firstName: "Jane", lastName: "Primo (coicomm7)" },
  { firstName: "Jane", lastName: "Primo (irbcomm6)" },
  { firstName: "Andy", lastName: "Protocol (apa)" },
  { firstName: "Tiana", lastName: "Racliffe (vet)" },
  { firstName: "Bar", lastName: "Rasson (safcch3)" },
  { firstName: "Test", lastName: "Registered User" },
  { firstName: "Justine", lastName: "Renz" },
  { firstName: "Test", lastName: "Research Compliance" },
  { firstName: "John", lastName: "Reviewer (dept-med)" },
  { firstName: "Zena", lastName: "Riolot (irbcomm7)" },
  { firstName: "Thelma", lastName: "Ritter (ss-hem)" },
  { firstName: "Patricia", lastName: "Roseburg" },
  { firstName: "Norman", lastName: "Salz" },
  { firstName: "Ted", lastName: "Sark (tc)" },
  { firstName: "Steve", lastName: "Savage (safs)" },
  { firstName: "Nook", lastName: "Sen (safcomm16)" },
  { firstName: "Adam", lastName: "Servicecoord (asc)" },
  { firstName: "Test", lastName: "SF424 Administrator" },
  { firstName: "Test", lastName: "SF424 Grants Specialist" },
  { firstName: "Test", lastName: "SF424 Reader" },
  { firstName: "Susan", lastName: "Simmons" },
  { firstName: "Rebecca", lastName: "Simms (pi)" },
  { firstName: "Test", lastName: "Site Manager" },
  { firstName: "Mike", lastName: "Smith" },
  { firstName: "Esteban", lastName: "Smith (coia)" },
  { firstName: "Fred", lastName: "Smith (coicch)" },
  { firstName: "Andrew", lastName: "Smith (coicomm1)" },
  { firstName: "Harry", lastName: "Smith (coicomm5)" },
  { firstName: "Greg", lastName: "Smith (dept-rev)" },
  { firstName: "Bob", lastName: "Smith (disc)" },
  { firstName: "Harry", lastName: "Smith (irbcomm4)" },
  { firstName: "Dave", lastName: "Smith (manager)" },
  { firstName: "Charlie", lastName: "Smith (monitor)" },
  { firstName: "Jacob", lastName: "Smith (rpa)" },
  { firstName: "Frank", lastName: "Smith (ss-imm2)" },
  { firstName: "Erin", lastName: "Sokorth (iacuccomm2)" },
  { firstName: "Fulki", lastName: "Spark (iacuc-sm)" },
  { firstName: "Test", lastName: "Specialists Finance/Grant" },
  { firstName: "Kaia", lastName: "Stable (aops-dm)" },
  { firstName: "Jennifer", lastName: "Stark" },
  { firstName: "Ira", lastName: "Stein (irbd)" },
  { firstName: "Ira", lastName: "Stein (man1)" },
  { firstName: "Test", lastName: "Study Staff" },
  { firstName: "Aditya", lastName: "Sun (coi-dm)" },
  { firstName: "Flo", lastName: "Supervisor (fs)" },
  { firstName: "Freda", lastName: "Supervisor (fs2)" },
  { firstName: "Jan", lastName: "Taylor" },
  { firstName: "Vivian", lastName: "Taylor (vt)" },
  { firstName: "Anne", lastName: "tbd" },
  { firstName: "Joe", lastName: "tbd" },
  { firstName: "Merle", lastName: "Thompson (safcch4)" },
  { firstName: "Bren", lastName: "Tipaka (iacucd2)" },
  { firstName: "Melanie", lastName: "Toque (safcomm11)" },
  { firstName: "Rich", lastName: "Tucker (iacuccch)" },
  { firstName: "Vinny", lastName: "Twellman (vt2)" },
  { firstName: "James", lastName: "Wallace" },
  { firstName: "Arthur", lastName: "Wang" },
  { firstName: "Mary", lastName: "Watson (iacucca1)" },
  { firstName: "Alan", lastName: "Watts (fm)" },
  { firstName: "Penny", lastName: "Weatherly (irbcch2)" },
  { firstName: "Test", lastName: "Web Services" },
  { firstName: "Erica", lastName: "Weiss" },
  { firstName: "Madeleine", lastName: "Wexler (dept-rad)" },
  { firstName: "Sam", lastName: "White" },
  { firstName: "Fred", lastName: "White (comm-on)" },
  { firstName: "Wendy", lastName: "Willis (safcomm8)" },
  { firstName: "Christa", lastName: "Wright" }
];