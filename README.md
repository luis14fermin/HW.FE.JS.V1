### Quick Notes From Luis
Once the repo is cloned, to start run:
```
npm i
npm run serve
```

# Assignment

Hi! We're glad you're here. This is your take home assignment. This repo consists of two JSON files, one that represents the structure of an html table, and another that will serve as your mocked data to populate the table. Your goal is to create the table using only JavaScript, utilizing the data in the JSON files to dynamically generate the content!

If you have any questions, **do not hesitate** to reach out!

Feel free to fork this repository and get started!

## Rules

### Do not use:

- jQuery
- Angular

### Use one of the following:

- VueJS - preferred
- Vanilla JavaScript
- React - nice to have but not required

### Tips

You may want to incorporate some existing helper libraries into your project (e.g., datejs).

### Optional Bonus

- Incorporate search
- Incorporate pagination (2 per/page or add to the data)
- Add duplicate records to the data and filter them out prior to render
- Add properties to `grid.json` that use can use to style the table (i.e., background color)
- Simulate a factory that fetches your data instead of just importing the JSON directly
- Simulate fetching by showing a loading icon
- If you see logic rendered in the table that's not apparent in the `grid.json`, feel free to alter the json to accommodate

## Finished Project

Here's what your table should look like when you're done!

### People

#### Here is a list of imaginary people

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>DOB</th>
      <th>Skills</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Jan 10</td>
      <td>Javascript, React</td>
      <td>1 Main Street<br>New York, NY 10001<br>USA</td>      
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>Nov 5</td>
      <td>HTML, CSS</td>
      <td>1 Main Street<br>New York, NY 10001<br>USA</td>      
    </tr>
    <tr>
      <td>Bob Doe</td>
      <td>Jan 1</td>
      <td>JavaScript, Vue, Angular, HTML, CSS</td>
      <td>2 Main Street<br>New York, NY 10001<br>USA</td>      
    </tr>
    <tr>
      <td>George Doe</td>
      <td>Feb 10</td>
      <td>None listed</td>
      <td>3 Main Street<br>USA</td>      
    </tr>
    <tr>
      <td>Jenny Doe</td>
      <td>n/a</td>
      <td>NodeJS, C#</td>
      <td>2 Main Street<br>New York, NY 10001<br>USA</td>      
    </tr>
  </tbody>
</table>
