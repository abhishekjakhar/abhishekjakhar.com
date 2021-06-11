import styled from "styled-components";

export default function DesktopTable({ data, fields, ...rest }) {
  return (
    <Wrapper {...rest}>
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field.key} style={{ flex: field.flex }}>
              {field.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.slug}>
            {fields.map((field) => {
              const renderLink = field.renderLink;
              return (
                <td key={field.key} style={{ flex: field.flex }}>
                  {renderLink ? renderLink(item) : item[field.key]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
}

const Wrapper = styled.table`
  width: 100%;
  display: none;

  @media ${(p) => p.theme.breakpoints.mdAndLarger} {
    display: block;
  }

  th {
    text-align: left;
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--color-gray-600);
    padding: 1rem 1.6rem;
    border-bottom: 2px solid var(--color-gray-700);
  }

  thead,
  tbody {
    display: block;
    width: 100%;
  }

  tr {
    display: flex;
    position: relative;
    transition: background 0.2s ease;
    will-change: background;
  }

  tbody tr:hover {
    background-color: var(--color-primary-50);
  }

  td {
    font-size: 1.6rem;
    padding: 1.6rem;
    color: var(--color-gray-900);

    &:first-of-type {
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      a {
        color: var(--color-primary-600);
        text-decoration: none;
      }
    }
  }
`;
