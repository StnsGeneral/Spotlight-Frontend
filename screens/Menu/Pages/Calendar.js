import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CalendarPage = () => {
  return (
    <SafeAreaView className="flex-1 justify-center">
      <Calendar
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('long press selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        // monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        // Do not show days of other months in month page. Default = false
        // hideExtraDays={true}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        // renderHeader={(date) => {
        //   /*Return JSX*/
        // }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        // Specify style for calendar container element. Default = {}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'black',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 24,
          textDayHeaderFontSize: 16,

          // 'stylesheet.calendar.header': {
          //   dayTextAtIndex0: {
          //     color: 'red',
          //   },
          //   dayTextAtIndex6: {
          //     color: 'blue',
          //   },
          // },
        }}
        // dayComponent={({ date, state, onDayPress }) => {
        //   return (
        //     <View
        //       className="border w-12 h-10 m-0 pl-0.5 items-start justify-end"
        //       onPress={onDayPress}>
        //       <Text
        //         style={{
        //           textAlign: 'center',
        //           color: state === 'disabled' ? 'gray' : 'black',
        //         }}>
        //         {date.day}th
        //       </Text>
        //     </View>
        //   );
        // }}
      />
      {/* <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
          '2012-05-22': [{ name: 'item 1 - any js object' }],
          '2012-05-23': [{ name: 'item 2 - any js object', height: 80 }],
          '2012-05-24': [],
          '2012-05-25': [
            { name: 'item 3 - any js object' },
            { name: 'any js object' },
          ],
        }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={(month) => {
          console.log('trigger items loading');
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => {
          console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={(day) => {
          console.log('day pressed');
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={(day) => {
          console.log('day changed');
        }}
        // Initially selected day
        selected={'2012-05-16'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2012-05-30'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return <View />;
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return <View />;
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <View />;
        }}
        // Override inner list with a custom implemented component
        // renderList={(listProps) => {
        //   return <MyCustomList {...listProps} />;
        // }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <View />;
        }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        // Hide knob button. Default = false
        hideKnob={true}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={false}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        markedDates={{
          '2012-05-16': { selected: true, marked: true },
          '2012-05-17': { marked: true },
          '2012-05-18': { disabled: true },
        }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        refreshControl={null}
        // Agenda theme
        theme={{
          // ...calendarTheme,
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
        }}
        // Agenda container style
        style={{}}
      /> */}
    </SafeAreaView>
  );
};

export default CalendarPage;
