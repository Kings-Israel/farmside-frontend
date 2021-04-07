<template>
  <div id="book">
    <div id="section-header">
      <h1 id="book">Book a shoot</h1>
    </div>

    <b-modal hide-footer ref="my-modal" id="modal-center" centered>
      <p><font-awesome-icon :icon="icon" size="2x" :color="color" /></p>
      <h5 class="my-4">{{ feedbackMessage }}</h5>
    </b-modal>
    <div class="container">
      <b-form id="book-form" @submit.prevent="book">
        <div class="row">
          <div class="col-sm-6 col-md-6">
            <!-- Client name -->
            <b-form-group id="name-label" label="Name" label-for="name">
              <b-form-input
                id="name-input"
                type="text"
                required
                placeholder="Enter your Name"
                v-model="form.name"
              ></b-form-input>
            </b-form-group>

            <!-- Client email address -->
            <b-form-group
              id="email-label"
              label="Email Address"
              label-for="email"
            >
              <b-form-input
                id="email-input"
                type="email"
                required
                placeholder="Enter your Email address"
                v-model="form.email"
              ></b-form-input>
            </b-form-group>

            <!-- Client Phone Number -->
            <b-form-group
              id="phone_number-label"
              label="Phone Number"
              label-for="Phone Number"
            >
              <b-form-input
                id="phone_number-input"
                type="text"
                required
                placeholder="Enter Your Phone Number"
                v-model="form.phone_number"
              ></b-form-input>
              <div class="error">{{ errors.phone }}</div>
            </b-form-group>

            <!-- Event Date -->
            <b-form-group
              id="event-data-label"
              label="Event Date"
              label-for="Event Date"
            >
              <b-form-datepicker
                id="datepicker"
                dropleft
                required
                hide-header
                placeholder="Choose a date"
                :min="min"
                v-model="form.event_date"
              ></b-form-datepicker>
            </b-form-group>

            <!-- Client Location -->
            <b-form-group
              id="location-label"
              label="Your Location"
              label-for="Phone Number"
            >
              <b-form-select
                id="location-select"
                required
                v-model="form.location"
                :options="locations"
              ></b-form-select>
            </b-form-group>

            <!-- Select event type -->
            <b-form-group
              id="select event type"
              label="Select the type of event:"
              label-for="event-type-selection"
            >
              <b-form-radio-group required>
                <b-form-radio
                  v-model="form.event_type"
                  name="photoshoot"
                  value="Photo Shoot"
                  >Photoshoot</b-form-radio
                >
                <b-form-radio
                  v-model="form.event_type"
                  name="videoshoot"
                  value="Video Shoot"
                  >Videoshoot</b-form-radio
                >
                <b-form-radio
                  v-model="form.event_type"
                  name="photovideo"
                  value="Photo and Video"
                  >Photo and Video Shoot</b-form-radio
                >
              </b-form-radio-group>
            </b-form-group>
          </div>
          <div class="col-sm-6 col-md-6">
            <!-- Event/Shoot duration -->
            <b-form-group
              id="duration"
              label="Event/Shoot Duration"
              label-for="event_duration"
            >
              <b-form-select
                id="event-duration"
                v-model="form.event_duration"
                required
                :options="duration"
              ></b-form-select>
            </b-form-group>

            <!-- Photoshoot Event selection -->
            <b-form-group
              v-if="form.event_type == 'Photo Shoot'"
              id="event"
              label="Event"
              label-for="event"
            >
              <b-form-select
                id="event"
                v-model="form.event_details.event"
                :options="photoshoot_events"
              ></b-form-select>
            </b-form-group>

            <!-- Video shoot event selection -->
            <b-form-group
              v-if="form.event_type == 'Video Shoot'"
              id="event"
              label="Event"
              label-for="event"
            >
              <b-form-select
                id="event"
                v-model="form.event_details.event"
                :options="videoshoot_events"
              ></b-form-select>
            </b-form-group>

            <!-- Number of people input -->
            <b-form-group
              v-if="form.event_type == 'Photo Shoot'"
              id="numberofpeople"
              label="Number of People"
              label-for="numberofpeople"
            >
              <b-form-input
                id="numberofpeople"
                type="number"
                no-wheel
                min="1"
                placeholder="Enter The Number of people expected"
                v-model="form.event_details.number_of_people"
              ></b-form-input>
            </b-form-group>

            <!-- Change of outfit selection -->
            <b-form-group
              v-if="
                form.event_type == 'Photo Shoot' &&
                  (form.event_details.event == 'Studio Shoot' ||
                    form.event_details.event == 'Outdoor Shoot')
              "
              id="changeoutfit"
              label="Change of outfit?"
              label-for="Change of outfit"
            >
              <b-form-radio-group>
                <b-form-radio
                  v-model="form.event_details.outfit_change"
                  name="Yes"
                  value="Yes"
                  >Yes</b-form-radio
                >
                <b-form-radio
                  v-model="form.event_details.outfit_change"
                  name="No"
                  value="No"
                  >No</b-form-radio
                >
              </b-form-radio-group>
            </b-form-group>

            <!-- Number of outfit changes -->
            <b-form-group
              v-if="
                form.event_type == 'Photo Shoot' &&
                  (form.event_details.event == 'Studio Shoot' ||
                    form.event_details.event == 'Outdoor Shoot') &&
                  form.event_details.outfit_change == 'Yes'
              "
              id="outfit-changes"
              label="Number of Outfit Changes:"
              label-for="Number of outfit changes"
            >
              <b-form-input
                id="outfit-changes-input"
                type="number"
                min="1"
                no-wheel
                placeholder="Please Enter Number of Changes"
                v-model="form.event_details.number_of_outfit_changes"
              ></b-form-input>
            </b-form-group>

            <!-- Photoshoot descritpion textarea -->
            <b-form-group
              v-if="form.event_type == 'Photo Shoot'"
              id="photoshoot_description_area"
              label="Enter a brief photoshoot description"
              label-for="Photoshoot description"
            >
              <b-form-textarea
                id="message"
                rows="4"
                max-rows="10"
                v-model="form.event_details.description"
                placeholder="Enter Photoshoot Description..."
              >
              </b-form-textarea>
            </b-form-group>

            <!-- Video shoot description area -->
            <b-form-group
              v-if="
                form.event_type == 'Video Shoot' ||
                  form.event_type == 'Photo and Video'
              "
              id="photoshoot_description_area"
              label="Enter a Video description"
              label-for="Photoshoot description"
            >
              <b-form-textarea
                id="message"
                required
                rows="10"
                max-rows="15"
                v-model="form.event_details.description"
                placeholder="Enter Video Description..."
              >
              </b-form-textarea>
            </b-form-group>
          </div>
        </div>
        <div class="submit-button">
          <button
            type="submit"
            :disabled="sending"
            class="btn btn-sm btn-outline-secondary w-50"
            id="submit-button"
          >
            Submit
          </button>
        </div>
      </b-form>
    </div>
    <bottom-page />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BottomPage from "../components/BottomPage.vue";

const validatePhone = (phone) => {
  if (
    !phone.match(
      /^(?:254|\+254|0)?(7(?:(?:[12][0-9])|(?:0[0-8])|(9[0-2]))[0-9]{6})$/gm
    )
  ) {
    return { valid: false, error: "Please, enter a valid phone number." };
  }

  return { valid: true, error: null };
};

export default {
  name: "Book",
  components: {
    BottomPage,
  },
  data() {
    const now = new Date();
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const minDate = new Date(today);
    return {
      sending: false,
      message: "",
      show: false,
      min: minDate,
      valid: true,
      errors: {},
      icon: ["fa", "check"],
      color: "",
      feedbackHeader: "",
      feedbackMessage: "",
      form: {
        name: "",
        email: "",
        phone_number: "",
        location: null,
        event_date: "",
        event_type: "",
        event_duration: null,
        event_details: {
          event: null,
          number_of_people: "",
          outfit_change: null,
          number_of_outfit_changes: "",
          description: "",
        },
      },
      locations: [
        { value: null, text: "Please select your county" },
        { value: "Nairobi", text: "Nairobi" },
        { value: "Machakos", text: "Machakos" },
        { value: "Kiambu", text: "Kiambu" },
        { value: "Kajiado", text: "Kajiado" },
        { value: "Nakuru", text: "Nakuru" },
      ],
      duration: [
        { value: null, text: "Please select the duration of the event/shoot" },
        { value: "Less than 1 hour", text: "Less than 1 hour" },
        { value: "1-2 hours", text: "1-2 hours" },
        { value: "2-3 hours", text: "2-3 hours" },
        { value: "3-4 hours", text: "3-4 hours" },
        { value: "4-5 hours", text: "4-5 hours" },
        { value: "5-6 hours", text: "5-6 hours" },
        { value: "6-12 hours", text: "6-12 hours" },
        { value: "Over 12 hours", text: "Over 12 hours" },
      ],
      photoshoot_events: [
        { value: null, text: "Please select event" },
        { value: "Studio Shoot", text: "Studio Shoot" },
        { value: "Outdoor Shoot", text: "Outdoor Shoot" },
        { value: "Birthday", text: "Birthday" },
        { value: "Graduation", text: "Graduation" },
        { value: "Funeral", text: "Funeral" },
        { vlaue: "Baby Shower", text: "Baby Shower"},
        { value: "Dowry payment", text: "Dowry Payment" },
        { value: "Other", text: "Other" },
      ],
      videoshoot_events: [
        { value: null, text: "Please select event" },
        { value: "Birthday", text: "Birthday" },
        { value: "Graduation", text: "Graduation" },
        { value: "Funeral", text: "Funeral" },
        { value: "Tours and Travel", text: "Tours and Travel" },
        { value: "Music Video", text: "Music Video" },
        { value: "Vlog", text: "Vlog" },
        { vlaue: "Advertisement", text: "Advertisement"},
        { value: "Drone Shots", text:"Drone Shots"},
        { value: "Other", text: "Other" },
      ],
    };
  },
  methods: {
    book() {
      this.sending = true;
      this.errors = {};
      const validPhone = validatePhone(this.form.phone_number);
      this.errors.phone = validPhone.error;
      this.valid = validPhone.valid;

      if (this.valid) {
        this.$store.dispatch("sendBooking", this.form).then(() => {
          if (this.booking) {
            this.form.name = "";
            this.form.email = "";
            this.form.phone_number = "";
            this.form.event_date = "";
            this.form.location = null;
            this.form.event_duration = null;
            this.form.event_type = "";
            this.form.event_details.event = null;
            this.form.event_details.number_of_people = "";
            this.form.event_details.outfit_change = null;
            this.form.event_details.number_of_outfit_changes = "";
            this.form.event_details.description = "";
            this.feedbackMessage =
              "Booking submitted successfully. We'll get back to you soon.";
            this.icon = ["fa", "check"];
            this.color = "#008000";
            this.showModal();
            this.sending = false;
          } else {
            this.icon = ["fa", "times"];
            this.color = "#FF0000";
            this.feedbackMessage = "Error Submitting. Please try again";
            this.showModal();
            this.sending = false;
          }
        });
      }
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  computed: {
    ...mapGetters(["booking"]),
  },
};
</script>

<style scoped>
#book-form {
  position: relative;
  margin-bottom: 40px;
}
.submit-button {
  display: flex;
  justify-content: center;
}
#submit-button {
  display: flex;
  justify-content: center;
}
.error {
  color: rgb(255, 0, 0);
  font-size: 15px;
}
</style>
